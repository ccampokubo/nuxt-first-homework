<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  await getAccessToken();
});
</script>
<template>
  <div class="flex">
    <h1>{{ $t("application") }}</h1>
  </div>
</template>
