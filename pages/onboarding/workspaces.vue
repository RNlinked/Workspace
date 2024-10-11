<template>
  <div class="max-w-md mx-auto my-52">
    <div class="flex items-center justify-center gap-1">
      <h1 class="font-semibold text-2xl text-center">Workspaces</h1>
    </div>

    <p class="text-sm text-neutral-500 py-2 text-center">
      Workspaces are the top-level containers in your organization. They can
      represent departments, locations, projects, or any other way you want to
      organize your teams.
    </p>
    <form class="flex flex-col gap-8 mt-8 w-full px-4">
      <label class="space-y-2">
        <h3 class="font-medium">Sites/Locations</h3>
        <p class="text-sm text-neutral-500">
          Add the sites or locations that your organization operates from.
        </p>

        <span
          v-for="(site, index) in sites"
          :key="index"
          class="flex items-center gap-3"
        >
          <UInput
            type="text"
            id="site-{{ index }}"
            v-model="sites[index]"
            size="md"
            icon="i-lucide-building"
            placeholder="Add Sites"
            class="flex-1"
          />
          <UButton
            icon="i-lucide-circle-minus"
            color="gray"
            variant="solid"
            size="sm"
            @click="removeSite(index)"
          />
        </span>

        <UButton
          icon="i-lucide-user-round-plus"
          label="Add Site"
          color="gray"
          variant="solid"
          size="lg"
          @click="addSites"
        />
      </label>

      <label class="space-y-2">
        <h3 class="font-medium">Add Teams</h3>
        <span
          v-for="(team, index) in teams"
          :key="index"
          class="flex items-center gap-3"
        >
          <UInput
            type="text"
            id="team-{{ index }}"
            v-model="teams[index]"
            placeholder="Add Teams"
            class="flex-1"
            icon="i-heroicons-user-group"
          />
          <UButton
            icon="i-lucide-circle-minus"
            color="gray"
            variant="solid"
            size="sm"
            @click="removeTeam(index)"
          />
        </span>
        <UButton
          icon="i-lucide-user-round-plus"
          label="Add Team"
          color="gray"
          variant="solid"
          size="lg"
          @click="addTeams"
        />
      </label>

      <NuxtLink to="/onboarding/team" class="btn btn-primary text-center"
        >Next</NuxtLink
      >
    </form>
  </div>
</template>

<script setup lang="ts">
const sites = ref([""]);
const teams = ref([""]);

const addTeams = () => {
  teams.value.push("");
};

const addSites = () => {
  sites.value.push("");
};

const removeTeam = (index: number) => {
  teams.value.splice(index, 1);
};
const removeSite = (index: number) => {
  sites.value.splice(index, 1);
};

definePageMeta({
  layout: "setup",
});
</script>
