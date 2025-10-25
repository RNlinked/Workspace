<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

definePageMeta({
  layout: "dashboard",
});

const org = useRoute().params.org as string;

const currentWorkspace = ref("Estuary Ward");

const navMenu = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Home",
      icon: "solar:home-2-linear",
      to: `/${org}`,
    },
    { label: "Inbox", icon: "solar:inbox-line-linear", to: `/${org}/messages` },
    { label: "Favorites", icon: "solar:star-linear", to: `/${org}/favorites` },
  ],
  [
    { label: "Workspaces", type: "label", children: [
      { label: "Nursing", to: `/${org}/workspaces/nursing` },
      { label: "Referrals", to: `/${org}/workspaces/referrals` },
      { label: "Discharges", to: `/${org}/workspaces/discharges` },
      { label: "Admissions", to: `/${org}/workspaces/admissions` },
    ] },
    { label: "Private Space", type: "label", children: [
      { label: "Private Documents", to: `/${org}/private/documents` },
      { label: "Personal Notes", to: `/${org}/private/personal-notes` },
      { label: "To-Do List", to: `/${org}/private/to-do-list` },
    ] },
  ],
]);
</script>

<template>
  <div>
    <p>Content for workspace: {{ currentWorkspace }}</p>
    <p>In Organization: {{ org }}</p>
    <p>In workspace: {{ currentWorkspace }}</p>
  </div>
  <!-- <UDashboardGroup>
    <UDashboardSidebar
      resizable
      :default-size="20"
      :min-size="20"
      :ui="{ footer: 'border-t border-default' }"
    >
      <template #default>
        <USelectMenu
          v-model="currentWorkspace"
          searchable
          clear-search-on-close
          size="lg"
          :items="workspaces"
          class="w-full"
        />
        <UDashboardSearchButton />
        <UNavigationMenu :items="navMenu" orientation="vertical" />
      </template>
    </UDashboardSidebar>
    <UDashboardSearch />
    <div>
      Content for workspace: {{ currentWorkspace }}
    </div>
  </UDashboardGroup> -->
</template>
