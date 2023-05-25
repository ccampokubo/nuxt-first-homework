<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  await generateAccessToken();
});
</script>
<template>
  <div class="login-page">
    <slot />
  </div>
</template>
