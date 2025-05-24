<template>
  <div class="px-8">
    <UTable :rows="files" :columns="columns">
      <template #name-data="{ row }">
        <NuxtLink v-if="row.type === 'Folder'" :to="`/folder/${row.id}`">
          <UIcon :name="icons(row.type) ?? ''" class="text-slate-500 w-5 h-5" />
          <span class="ml-2">{{ row.name }}</span>
        </NuxtLink>
        <NuxtLink v-else :to="`/doc/${row.id}`">
          <UIcon :name="icons(row.type) ?? ''" class="text-slate-500 w-5 h-5" />
          <span class="ml-2">{{ row.name }}</span>
        </NuxtLink>
      </template>
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>
  </div>
</template>

<script setup lang="ts">
import { icons } from "~/lib/api";
const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "author",
    label: "Author",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "actions",
  },
];
const { files } = defineProps<{
  files: any[];
}>();

const items = (row: any) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];

// const { data } = await useFetch("/api/drugnames");
</script>
