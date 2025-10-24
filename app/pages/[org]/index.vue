<script setup lang="ts">
// const route = useRoute();

// const { org } = route.params;
const currentWorkspace = ref("Estuary Ward");
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      resizable
      :default-size="20"
      :min-size="20"
      :ui="{ footer: 'border-t border-default' }"
    >
      <!-- :collapsed-size="0" -->
      <template #header>
        <USelectMenu
          v-model="currentWorkspace"
          searchable
          clear-search-on-close
          size="xl"
          :items="[
            'MSE',
            'Estuary Ward',
            'Balmoral Ward',
            'HCA Support Group',
            'Benfleet ward',
            'Blenheim ward',
            'Chalkwell ward',
            'Dowsett ward',
            'Eastwood ward',
            'Elizabeth Loury ward',
            'Gordon Hopkins ward',
            'Hockley ward',
            'Infusion Unit',
            'Neptune ward',
            'Paglesham ward',
            'Princess Anne ward',
            'Rochford ward',
            'Shopland ward',
            'Southbourne ward',
            'Stambridge ward',
            'Westcliff ward',
            'Windsor ward',
          ]"
          class="my-4 w-52"
        />
      </template>

      <template #default>
        <UDashboardSearchButton />
        <div class="mb-6">
          Home
        </div>
        <div class="capitalize text-sm">
          workspaces
        </div>
        <div>Nursing</div>
        <div>Referrals</div>
        <div>Discharges</div>
        <div>Admissions</div>

        <h2 class="capitalize text-sm mt-8">
          Private Space
        </h2>
        <div>Personal Notes</div>
        <div>To-Do List</div>
      </template>
    </UDashboardSidebar>
  </UDashboardGroup>
</template>
