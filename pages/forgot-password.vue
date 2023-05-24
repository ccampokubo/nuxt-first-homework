<script setup lang="ts">
import { ref } from "vue";
definePageMeta({ layout: "login" });

const step = ref("email");
const data = ref({});

const change = (event: any) => {
  console.log(event);
  data.value = { ...event.data, ...data.value };
  step.value = event.change;
};
</script>
<template>
  <div class="card-login h-auto">
    <div class="card h-auto">
      <FormEmail v-if="step === 'email'" @change="change" />
    </div>
  </div>
</template>
