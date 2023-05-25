<script setup lang="ts">
import { onBeforeMount } from "vue";

onBeforeMount(async () => {
  await generateAccessToken();
});
</script>
<template>
  <div class="login-page">
    <slot />
  </div>
</template>
