<script setup>
import { ref } from "vue";
import {
  FolderIcon,
  BookOpenIcon,
  UsersIcon,
  FileTextIcon,
} from "lucide-vue-next";
import { NuxtLink } from "#components";
import PreviewCard from "../docs/PreviewCard.vue";

const carouselData = ref({
  "Recent Documents": [
    { id: "1", name: "Patient Intake Form", type: "document" },
    { id: "2", name: "COVID-19 Protocol", type: "document" },
    { id: "3", name: "Staff Training Manual", type: "document" },
  ],
  "Your Teams": [
    { id: "1", name: "Emergency Department", type: "team" },
    { id: "2", name: "Nursing Staff", type: "team" },
    { id: "3", name: "Administration", type: "team" },
  ],
  "Key Policies": [
    { id: "1", name: "HIPAA Compliance Guidelines", type: "policy" },
    { id: "2", name: "Infection Control Policy", type: "policy" },
    { id: "3", name: "Emergency Response Procedure", type: "policy" },
  ],
});

const quickLinks = [
  { to: "/documents", icon: FolderIcon, text: "All Documents" },
  { to: "/knowledge", icon: BookOpenIcon, text: "Knowledge Base" },
  { to: "/teams", icon: UsersIcon, text: "Team Management" },
  { to: "/policies", icon: FileTextIcon, text: "Policies & Procedures" },
];
</script>

<template>
  <div class="container mx-auto p-4">
    <div v-for="(items, title) in carouselData" :key="title" class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
      <div class="flex space-x-4 overflow-x-auto pb-4">
        <PreviewCard
          v-for="item in items"
          :key="item.id"
          :title="item.name"
          :type="item.type"
        />
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-4">Quick Links</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <NuxtLink
          v-for="link in quickLinks"
          :key="link.to"
          :to="link.to"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          <component :is="link.icon" class="mr-2 h-4 w-4" />
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
