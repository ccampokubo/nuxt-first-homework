<script setup lang="ts">
await generateAccessToken()
</script>
<template>
  <Loading />
  <NuxtLayout>
    <NuxtPage />
    <Toast position="bottom-left" />
  </NuxtLayout>
</template>
