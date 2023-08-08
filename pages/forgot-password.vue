<script setup lang="ts">
import { ref } from 'vue'
definePageMeta({ layout: 'login' })

const step = ref('email')
const data = ref({})

const change = (event: any) => {
  data.value = { ...event.data, ...data.value }
  step.value = event.change
}
</script>
<template>
  <div class="card-login h-auto">
    <div class="card h-auto">
      <FormEmail v-if="step === 'email'" @change="change" />
      <ValidateCode
        v-if="step === 'validateCode'"
        :user="data"
        @change="change"
      />
      <Password v-if="step === 'changePassword'" />
    </div>
  </div>
</template>
