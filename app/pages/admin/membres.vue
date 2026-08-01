<template>
  <UDashboardPanel id="admin-membres">
    <template #header>
      <UDashboardNavbar title="Membres d'équipe">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
        <template #right>
          <UButton
            icon="material-symbols:add"
            label="Ajouter"
            @click="openCreate"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <UInput
          v-model="search"
          icon="material-symbols:search"
          placeholder="Rechercher un membre…"
          class="max-w-xs"
        />
      </UDashboardToolbar>
    </template>

    <template #body>
      <UTable
        :data="filteredMembers"
        :columns="columns"
        class="shrink-0"
        :ui="{
          base: 'table-fixed border-separate border-spacing-0',
          thead: '[&>tr]:bg-elevated/50 [&>tr]:after:content-none',
          tbody: '[&>tr]:last:[&>td]:border-b-0',
          th: 'py-2 first:rounded-l-lg last:rounded-r-lg border-y border-default first:border-l last:border-r',
          td: 'border-b border-default',
          tr: 'cursor-pointer',
        }"
        @select="onRowSelect"
      />

      <USlideover
        v-model:open="formOpen"
        :title="editing ? 'Modifier le membre' : 'Nouveau membre'"
        :description="
          editing
            ? 'Mettez à jour les informations du membre.'
            : 'Renseignez le nom, le rôle, la biographie, la région et la station.'
        "
        :ui="{
          content: 'w-3/4 max-w-none bg-neutral-900',
          footer: 'justify-end gap-2',
        }"
      >
        <template #body>
          <UForm
            id="member-form"
            :schema="schema"
            :state="form"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormField name="photo" label="Photo">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div
                  class="bg-elevated border-default flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
                >
                  <img
                    v-if="form.photo"
                    :src="form.photo"
                    alt=""
                    class="size-full object-cover"
                  />
                  <UIcon
                    v-else
                    name="material-symbols:person-outline"
                    class="text-muted size-10"
                  />
                </div>
                <div class="min-w-0 flex-1 space-y-2">
                  <UFileUpload
                    v-model="photoFile"
                    accept="image/jpeg,image/png,image/webp"
                    label="Choisir une photo"
                    description="JPEG, PNG ou WebP — max 5 Mo"
                    :disabled="photoUploading"
                  />
                  <div class="flex flex-wrap gap-2">
                    <UButton
                      v-if="form.photo"
                      label="Retirer"
                      color="neutral"
                      variant="ghost"
                      size="sm"
                      :disabled="photoUploading"
                      @click="clearPhoto"
                    />
                    <p v-if="photoUploading" class="text-muted text-sm">
                      Envoi en cours…
                    </p>
                  </div>
                </div>
              </div>
            </UFormField>

            <UFormField name="name" label="Nom" required>
              <UInput v-model="form.name" placeholder="Prénom Nom" class="w-full" />
            </UFormField>

            <UFormField name="role" label="Rôle" required>
              <UInput
                v-model="form.role"
                placeholder="Ex. Kinésithérapeute du sport"
                class="w-full"
              />
            </UFormField>

            <UFormField name="biography" label="Biographie">
              <UTextarea
                v-model="form.biography"
                :rows="6"
                autoresize
                placeholder="Présentation du membre…"
                class="w-full"
              />
            </UFormField>

            <UFormField name="region" label="Région" required>
              <USelect
                v-model="form.region"
                :items="regionItems"
                placeholder="Choisir une région"
                class="w-full"
              />
            </UFormField>

            <UFormField name="stationId" label="Station" required>
              <USelect
                v-model="form.stationId"
                :items="stationItems"
                placeholder="Choisir une station"
                class="w-full"
              />
            </UFormField>
          </UForm>
        </template>

        <template #footer>
          <UButton
            label="Annuler"
            color="neutral"
            variant="outline"
            @click="formOpen = false"
          />
          <UButton
            type="submit"
            form="member-form"
            :label="editing ? 'Enregistrer' : 'Créer'"
          />
        </template>
      </USlideover>

      <UModal
        v-model:open="deleteOpen"
        title="Supprimer le membre"
        :description="
          pendingDelete
            ? `Supprimer « ${pendingDelete.name} » ? Cette action est irréversible.`
            : undefined
        "
        :ui="{ footer: 'justify-end gap-2' }"
      >
        <template #footer>
          <UButton
            label="Annuler"
            color="neutral"
            variant="outline"
            @click="deleteOpen = false"
          />
          <UButton label="Supprimer" color="error" @click="confirmDelete" />
        </template>
      </UModal>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import * as z from 'zod'
import { h, resolveComponent } from 'vue'
import type { FormSubmitEvent, TableColumn, TableRow } from '@nuxt/ui'
import { FRENCH_REGIONS } from '~/types/admin'
import type { TeamMember, TeamMemberInput } from '~/types/admin'

definePageMeta({
  layout: 'admin',
})

useSeoMeta({
  title: 'Objectif Sport - Admin — Membres',
  robots: 'noindex, nofollow',
})

const UButton = resolveComponent('UButton')
const toast = useToast()
const {
  members,
  stations,
  stationName,
  hydrate,
  addMember,
  updateMember,
  removeMember,
} = useAdminStore()

onMounted(() => hydrate())

const search = ref('')
const formOpen = ref(false)
const deleteOpen = ref(false)
const editing = ref<TeamMember | null>(null)
const pendingDelete = ref<TeamMember | null>(null)
const photoFile = ref<File | null>(null)
const photoUploading = ref(false)

const schema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  role: z.string().min(1, 'Le rôle est requis'),
  biography: z.string().default(''),
  region: z.string().min(1, 'La région est requise'),
  stationId: z.string().min(1, 'La station est requise'),
  photo: z.string().default(''),
})

const form = reactive<Partial<TeamMemberInput>>({
  name: '',
  role: '',
  biography: '',
  region: undefined,
  stationId: undefined,
  photo: '',
})

const regionItems: string[] = [...FRENCH_REGIONS]

const stationItems = computed(() =>
  stations.value.map((station) => ({
    label: station.name,
    value: station.id,
  })),
)

const filteredMembers = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return members.value
  return members.value.filter((member) => {
    const haystack = [
      member.name,
      member.role,
      member.biography,
      member.region,
      stationName(member.stationId),
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
})

const columns: TableColumn<TeamMember>[] = [
  {
    id: 'photo',
    header: '',
    cell: ({ row }) => {
      const photo = row.original.photo
      if (!photo) {
        return h(
          'div',
          {
            class:
              'bg-elevated text-muted flex size-8 items-center justify-center rounded-full',
          },
          [
            h(resolveComponent('UIcon'), {
              name: 'material-symbols:person-outline',
              class: 'size-4',
            }),
          ],
        )
      }
      return h('img', {
        src: photo,
        alt: '',
        class: 'size-8 rounded-full object-cover',
      })
    },
  },
  {
    accessorKey: 'name',
    header: 'Nom',
  },
  {
    accessorKey: 'role',
    header: 'Rôle',
  },
  {
    accessorKey: 'region',
    header: 'Région',
  },
  {
    id: 'station',
    header: 'Station',
    cell: ({ row }) => stationName(row.original.stationId),
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) =>
      h('div', { class: 'flex justify-end gap-1' }, [
        h(UButton, {
          icon: 'material-symbols:delete-outline',
          color: 'error',
          variant: 'ghost',
          size: 'sm',
          square: true,
          onClick: (e: MouseEvent) => {
            e.stopPropagation()
            askDelete(row.original)
          },
        }),
      ]),
  },
]

function resetForm() {
  form.name = ''
  form.role = ''
  form.biography = ''
  form.region = undefined
  form.stationId = stations.value[0]?.id
  form.photo = ''
  photoFile.value = null
}

function openCreate() {
  if (!stations.value.length) {
    toast.add({
      title: 'Aucune station',
      description: 'Créez d’abord une station avant d’ajouter un membre.',
      color: 'warning',
    })
    return
  }
  editing.value = null
  resetForm()
  formOpen.value = true
}

function openEdit(member: TeamMember) {
  editing.value = member
  form.name = member.name
  form.role = member.role
  form.biography = member.biography ?? ''
  form.region = member.region
  form.stationId = member.stationId
  form.photo = member.photo ?? ''
  photoFile.value = null
  formOpen.value = true
}

function onRowSelect(e: Event, row: TableRow<TeamMember>) {
  const target = e.target as HTMLElement | null
  if (target?.closest('button, a, input, textarea, [role="checkbox"]')) return
  openEdit(row.original)
}

async function uploadPhoto(file: File) {
  const body = new FormData()
  body.append('file', file)
  if (form.photo) body.append('previousUrl', form.photo)
  if (editing.value?.id) body.append('memberId', editing.value.id)

  photoUploading.value = true
  try {
    const result = await $fetch<{ url: string }>('/api/admin/member-photo', {
      method: 'POST',
      body,
    })
    form.photo = result.url
    toast.add({ title: 'Photo envoyée', color: 'success' })
  } catch (error: unknown) {
    const fetchError = error as {
      statusMessage?: string
      data?: { statusMessage?: string; message?: string }
      message?: string
    }
    const message =
      fetchError.data?.statusMessage ||
      fetchError.statusMessage ||
      fetchError.message ||
      'Échec de l’envoi'
    toast.add({
      title: 'Upload impossible',
      description: message,
      color: 'error',
    })
    photoFile.value = null
  } finally {
    photoUploading.value = false
  }
}

watch(photoFile, (file) => {
  if (!file || photoUploading.value) return
  void uploadPhoto(file)
})

function clearPhoto() {
  form.photo = ''
  photoFile.value = null
}

function onSubmit(event: FormSubmitEvent<TeamMemberInput>) {
  const data: TeamMemberInput = {
    ...event.data,
    biography: event.data.biography ?? '',
    photo: form.photo ?? '',
  }
  if (editing.value) {
    updateMember(editing.value.id, data)
    toast.add({ title: 'Membre mis à jour', color: 'success' })
  } else {
    addMember(data)
    toast.add({ title: 'Membre créé', color: 'success' })
  }
  formOpen.value = false
}

function askDelete(member: TeamMember) {
  pendingDelete.value = member
  deleteOpen.value = true
}

function confirmDelete() {
  if (!pendingDelete.value) return
  removeMember(pendingDelete.value.id)
  toast.add({ title: 'Membre supprimé', color: 'success' })
  deleteOpen.value = false
  pendingDelete.value = null
}
</script>
