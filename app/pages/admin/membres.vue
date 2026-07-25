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
        }"
      />

      <UModal
        v-model:open="formOpen"
        :title="editing ? 'Modifier le membre' : 'Nouveau membre'"
        :description="
          editing
            ? 'Mettez à jour les informations du membre.'
            : 'Renseignez le nom, le rôle, la région et la station.'
        "
        :ui="{ footer: 'justify-end gap-2' }"
      >
        <template #body>
          <UForm
            :schema="schema"
            :state="form"
            class="space-y-4"
            @submit="onSubmit"
          >
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

            <div class="flex justify-end gap-2 pt-2">
              <UButton
                label="Annuler"
                color="neutral"
                variant="outline"
                @click="formOpen = false"
              />
              <UButton
                type="submit"
                :label="editing ? 'Enregistrer' : 'Créer'"
              />
            </div>
          </UForm>
        </template>
      </UModal>

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
import type { FormSubmitEvent, TableColumn } from '@nuxt/ui'
import { FRENCH_REGIONS } from '~/types/admin'
import type { TeamMember, TeamMemberInput } from '~/types/admin'

definePageMeta({
  layout: 'admin',
})

useSeoMeta({
  title: 'Admin — Membres',
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

const schema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  role: z.string().min(1, 'Le rôle est requis'),
  region: z.string().min(1, 'La région est requise'),
  stationId: z.string().min(1, 'La station est requise'),
})

const form = reactive<Partial<TeamMemberInput>>({
  name: '',
  role: '',
  region: undefined,
  stationId: undefined,
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
          icon: 'material-symbols:edit-outline',
          color: 'neutral',
          variant: 'ghost',
          size: 'sm',
          square: true,
          onClick: () => openEdit(row.original),
        }),
        h(UButton, {
          icon: 'material-symbols:delete-outline',
          color: 'error',
          variant: 'ghost',
          size: 'sm',
          square: true,
          onClick: () => askDelete(row.original),
        }),
      ]),
  },
]

function resetForm() {
  form.name = ''
  form.role = ''
  form.region = undefined
  form.stationId = stations.value[0]?.id
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
  form.region = member.region
  form.stationId = member.stationId
  formOpen.value = true
}

function onSubmit(event: FormSubmitEvent<TeamMemberInput>) {
  if (editing.value) {
    updateMember(editing.value.id, event.data)
    toast.add({ title: 'Membre mis à jour', color: 'success' })
  } else {
    addMember(event.data)
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
