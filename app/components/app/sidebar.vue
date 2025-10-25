<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const teams = [
  "MSE",
  "ePMA Team",
  "Estuary Ward",
  "Balmoral Ward",
  "HCA Support Group",
  "Benfleet ward",
  "Blenheim ward",
  "Chalkwell ward",
  "Dowsett ward",
  "Eastwood ward",
  "Elizabeth Loury ward",
  "Gordon Hopkins ward",
  "Hockley ward",
  "Infusion Unit",
  "Neptune ward",
  "Paglesham ward",
  "Princess Anne ward",
  "Rochford ward",
  "Shopland ward",
  "Southbourne ward",
  "Stambridge ward",
  "Westcliff ward",
  "Windsor ward",
];

const workspaces = [
  "JJMIS",
  "DCW Team",
  "ePMA Clinical Team",
];

const privateSpaces = [
  "Private Documents",
  "Personal Notes",
  "To-Do List",
];
const currentTeam = ref("ePMA Team");
const currentWorkspace = ref("JJMIS");
const navMenu = ref<NavigationMenuItem[][]>([[
  {
    label: "Home",
    icon: "solar:home-2-linear",
    to: `/${useRoute().params.org as string}`,
  },
  { label: "Inbox", icon: "solar:inbox-line-linear", to: `/${useRoute().params.org as string}/messages` },
  { label: "Favorites", icon: "solar:star-linear", to: `/${useRoute().params.org as string}/favorites` },
]]);

const searchGroups = ref([

  { id: "workspaces", label: "Workspaces", items: [
    { label: "JJMIS", to: `/${useRoute().params.org as string}/workspaces/jjmis` },
    { label: "DCW Team", to: `/${useRoute().params.org as string}/workspaces/dcw-team` },
    { label: "ePMA Clinical Team", to: `/${useRoute().params.org as string}/workspaces/epma-clinical-team` },
  ] },
  { id: "recent", label: "Recent files", items: [
    { label: "Patient Care Plan - John Doe", to: `/${useRoute().params.org as string}/documents/patient-care-plan-john-doe` },
    { label: "Discharge Summary - Jane Smith", to: `/${useRoute().params.org as string}/documents/discharge-summary-jane-smith` },
    { label: "Medication List - Bob Johnson", to: `/${useRoute().params.org as string}/documents/medication-list-bob-johnson` },
  ] },
  { id: "policies", label: "Policies", items: [
    { label: "Infection Control Policy", to: `/${useRoute().params.org as string}/documents/infection-control-policy` },
    { label: "Data Protection Policy", to: `/${useRoute().params.org as string}/documents/data-protection-policy` },
    { label: "Health and Safety Policy", to: `/${useRoute().params.org as string}/documents/health-and-safety-policy` },
    { label: "See all policies...", to: `/${useRoute().params.org as string}/documents/policies` },
  ] },
  { id: "commands", label: "Commands", items: [
    { label: "Create New Document", to: `/${useRoute().params.org as string}/documents/new` },
    { label: "Open Settings", to: `/${useRoute().params.org as string}/settings` },
    { label: "Help & Support", to: `/${useRoute().params.org as string}/help` },
  ] },
]);
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <USelectMenu
        v-model="currentTeam"
        searchable
        clear-search-on-close
        size="lg"
        :items="teams"
        class="w-full"
      />
      <UModal
        :ui="{
          content: 'ring border border-muted bg-background left-[50%] grid fixed top-[5%] translate-x-[-50%] translate-y-[0%] overflow-auto max-w-3xl min-h-[400px] w-full ',
        }"
      >
        <UButton
          label="Search"
          variant="ghost"
          icon="solar:rounded-magnifer-linear"
          size="lg"
        />
        <template #content>
          <UCommandPalette :groups="searchGroups" />
        </template>
      </UModal>
      <UNavigationMenu :items="navMenu" orientation="vertical" />
    </SidebarHeader>
    <SidebarContent class="px-3 py-6">
      <AppUiHeading3 title="Workspaces" class="px-2" />
      <UCollapsible
        v-for="w in workspaces"
        :key="w" class=""
        :label="w"
      >
        <UButton
          :label=" w "
          variant="ghost"
          icon="solar:library-linear"
          size="md"
          class="w-full "
          trailing-icon="solar:alt-arrow-down-linear"
          block
          @click="currentWorkspace = w"
        />

        <template #content>
          <p>This is the content inside the collapsible section.</p>
          <p>Current workspace: {{ currentWorkspace }}</p>
        </template>
      </UCollapsible>
      <AppUiHeading3 title="Private Space" class="px-2 mt-6" />
      <UCollapsible
        v-for="p in privateSpaces"
        :key="p" class=""
        :label="p"
      >
        <UButton
          :label=" p "
          variant="ghost"
          icon="solar:folder-open-linear"
          size="md"
          class="w-full"
        />
        <template #content>
          <p>This is the content inside the collapsible section.</p>
        </template>
      </UCollapsible>
    </SidebarContent>
    <SidebarFooter class="px-5">
      footer
    </SidebarFooter>
  </Sidebar>
</template>
