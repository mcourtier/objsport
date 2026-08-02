<template>
  <UDashboardPanel id="admin-stations">
    <template #header>
      <UDashboardNavbar title="Stations">
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
          placeholder="Rechercher une station…"
          class="max-w-xs"
        />
      </UDashboardToolbar>
    </template>

    <template #body>
      <UTable
        :data="filteredStations"
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
        :title="editing ? 'Modifier la station' : 'Nouvelle station'"
        :description="
          editing
            ? 'Mettez à jour les informations de la station.'
            : 'Ajoutez une station Sport-Santé au réseau.'
        "
        :ui="{ footer: 'justify-end gap-2', content: 'sm:max-w-lg' }"
      >
        <template #body>
          <UForm
            :schema="schema"
            :state="form"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormField name="name" label="Nom" required size="xl">
              <UInput
                v-model="form.name"
                placeholder="Nom de la station"
                class="w-full"
              />
            </UFormField>

            <UFormField name="location" label="Localisation" required size="xl">
              <UInput
                v-model="form.location"
                placeholder="Ville (code postal)"
                class="w-full"
              />
            </UFormField>

            <UFormField name="description" label="Description" required size="xl">
              <UTextarea
                v-model="form.description"
                :rows="3"
                placeholder="Courte description"
                class="w-full"
              />
            </UFormField>

            <UFormField name="image" label="Image (URL)" required size="xl">
              <UInput
                v-model="form.image"
                placeholder="/images/stations/…"
                class="w-full"
              />
            </UFormField>

            <UFormField name="imageAlt" label="Texte alternatif" required size="xl">
              <UInput
                v-model="form.imageAlt"
                placeholder="Description de l’image"
                class="w-full"
              />
            </UFormField>

            <UFormField name="website" label="Site web" required size="xl">
              <UInput
                v-model="form.website"
                type="url"
                placeholder="https://"
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
        title="Supprimer la station"
        :description="
          pendingDelete
            ? `Supprimer « ${pendingDelete.name} » ? Les membres liés doivent d’abord être réaffectés.`
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
import type { StationInput } from '~/types/admin'
import type { Station } from '~/types/station'

definePageMeta({
  layout: 'admin',
  pageTransition: false,
})

useSeoMeta({
  title: 'Objectif Sport - Admin — Stations',
  robots: 'noindex, nofollow',
})

const UButton = resolveComponent('UButton')
const toast = useToast()
const {
  stations,
  members,
  hydrate,
  addStation,
  updateStation,
  removeStation,
} = useAdminStore()

onMounted(() => hydrate())

const search = ref('')
const formOpen = ref(false)
const deleteOpen = ref(false)
const editing = ref<Station | null>(null)
const pendingDelete = ref<Station | null>(null)

const schema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  location: z.string().min(1, 'La localisation est requise'),
  description: z.string().min(1, 'La description est requise'),
  image: z.string().min(1, "L'image est requise"),
  imageAlt: z.string().min(1, 'Le texte alternatif est requis'),
  website: z.string().url('URL invalide'),
})

const form = reactive<Partial<StationInput>>({
  name: '',
  location: '',
  description: '',
  image: '',
  imageAlt: '',
  website: '',
})

const filteredStations = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return stations.value
  return stations.value.filter((station) => {
    const haystack = [station.name, station.location, station.description]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
})

function memberCount(stationId: string) {
  return members.value.filter((member) => member.stationId === stationId)
    .length
}

const columns: TableColumn<Station>[] = [
  {
    accessorKey: 'name',
    header: 'Nom',
  },
  {
    accessorKey: 'location',
    header: 'Localisation',
  },
  {
    id: 'members',
    header: 'Membres',
    cell: ({ row }) => String(memberCount(row.original.id)),
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
  form.location = ''
  form.description = ''
  form.image = '/images/stations/'
  form.imageAlt = ''
  form.website = 'https://'
}

function openCreate() {
  editing.value = null
  resetForm()
  formOpen.value = true
}

function openEdit(station: Station) {
  editing.value = station
  form.name = station.name
  form.location = station.location
  form.description = station.description
  form.image = station.image
  form.imageAlt = station.imageAlt
  form.website = station.website
  formOpen.value = true
}

function onSubmit(event: FormSubmitEvent<StationInput>) {
  if (editing.value) {
    updateStation(editing.value.id, event.data)
    toast.add({ title: 'Station mise à jour', color: 'success' })
  } else {
    addStation(event.data)
    toast.add({ title: 'Station créée', color: 'success' })
  }
  formOpen.value = false
}

function askDelete(station: Station) {
  pendingDelete.value = station
  deleteOpen.value = true
}

function confirmDelete() {
  if (!pendingDelete.value) return
  try {
    removeStation(pendingDelete.value.id)
    toast.add({ title: 'Station supprimée', color: 'success' })
    deleteOpen.value = false
    pendingDelete.value = null
  } catch (error) {
    toast.add({
      title: 'Suppression impossible',
      description:
        error instanceof Error ? error.message : 'Une erreur est survenue.',
      color: 'error',
    })
  }
}
</script>
