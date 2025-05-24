<template>
  <div class="max-w-md mx-auto my-52">
    <h1 class="font-semibold text-2xl text-center">Add Users</h1>
    <form class="flex flex-col gap-8 mt-8 w-full px-4">
      <label
        v-for="(user, index) in users"
        :key="index"
        class="flex items-center gap-3"
      >
        <UInput
          type="text"
          id="user-{{ index }}"
          v-model="users[index].email"
          placeholder="harry.porter@example.com"
          class="flex-1"
          size="md"
        />
        <USelect
          id="role-{{ index }}"
          v-model="users[index].role"
          :options="roleOptions"
          placeholder="Select Role"
          size="md"
        />

        <UButton
          icon="i-lucide-circle-minus"
          color="gray"
          variant="solid"
          size="sm"
          @click="removeUser(index)"
        />
      </label>
      <span class="-mt-4">
        <UButton
          icon="i-lucide-user-round-plus"
          label="Add User"
          color="gray"
          variant="solid"
          size="lg"
          @click="addUser"
        />
      </span>

      <NuxtLink to="/" class="btn btn-primary text-center py-1.5"
        >Next</NuxtLink
      >
    </form>
  </div>
</template>
<script setup lang="ts">
const roleOptions = ref(["Admin", "User"]);
const users = ref([{ email: "", role: "User" }]);

const addUser = () => {
  users.value.push({ email: "", role: "User" });
};

const removeUser = (index: number) => {
  users.value.splice(index, 1);
};

definePageMeta({
  layout: "setup",
});
</script>
