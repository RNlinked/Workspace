<template>
  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
    <meta property="og:description" :content="description" />
    <meta property="og:title" :content="title" />
    <meta property="og:image" :content="image" />
    <meta name="image" :content="image" />
    <meta property="og:url" :content="url" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" :content="title" />
    <meta name="twitter:description" :content="description" />
    <meta name="twitter:image" :content="image" />
  </Head>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: { type: String, default: "/favicon.ico" },
  url: { type: String, default: "http://localhost:3005" },
});
</script>
