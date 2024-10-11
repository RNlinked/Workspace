<template>
  <FolderList :files="files" />
</template>

<script setup lang="ts">
const files = [
  {
    id: 1,
    name: "Student Welcome Pack",
    type: "Folder",
    date: "12/12/2021",
  },
  {
    id: 2,
    name: "MCA and DOLS",
    type: "docx",
    date: "12/12/2021",
  },
  {
    id: 3,
    name: "Discharge",
    type: "Folder",
    date: "12/12/2021",
  },
  {
    id: 4,
    name: "Referrals",
    type: "Folder",
    date: "12/12/2021",
  },
  {
    id: 5,
    name: "Ward Meetings",
    type: "Folder",
    date: "12/12/2021",
  },
];
</script>
