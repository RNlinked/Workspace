<template>
  <div class="h-screen">
    <ResizablePanelGroup id="handle-group-1" direction="horizontal" class="">
      <ResizablePanel
        id="handle-panel-1"
        class="w-fit px-6 bg-gray-100/40"
        :default-size="20"
      >
        <USelectMenu
          searchable
          clear-search-on-close
          v-model="currentWorkspace"
          :options="[
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
          class="my-4"
        />
        <SideBar :currentWorkspace="currentWorkspace" :folders="folders" />
      </ResizablePanel>
      <ResizableHandle id="handle-handle-1" with-handle />
      <ResizablePanel id="handle-panel-2" :default-size="80" class="">
        <div class="h-full overflow-y-scroll">
          <AppBar :currentWorkspace="currentWorkspace" />
          <slot />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<script setup lang="ts">
import AppBar from "~/components/nav/AppBar.vue";
import SideBar from "~/components/nav/SideBar.vue";
import { getFolders } from "~/lib/api.js";
const currentWorkspace = ref("Estuary Ward");

const folders = getFolders();
</script>
