<script setup lang="ts">
const props = defineProps(['user'])
const emit = defineEmits(['change'])
import { ref, onMounted } from 'vue'
import VOtpInput from 'vue3-otp-input'

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null)
const bindModal = ref('')
const time = ref(30)
const interval = ref()

const handleOnComplete = async (value: string) => {
  const result = (await apiServices({
    method: 'POST',
    url: 'onboarding/verify-code',
    data: {
      user: props.user?.user,
      code: value,
    },
  })) as any

  if (result.status && result.code === 100) {
    emit('change', { data: props.user, change: 'changePassword' })
    showAlert({
      type: 'success',
      message: result.message,
    })
  } else {
    showAlert({
      type: 'error',
      message: result.message,
    })
  }
}

onMounted(() => {
  startCount()
})

const startCount = () => {
  interval.value = setInterval(() => {
    if (time.value === 0) {
      clearInterval(interval.value)
    } else {
      time.value--
    }
  }, 1000)
}

const sendCode = async () => {
  const result = (await apiServices({
    method: 'POST',
    url: 'onboarding/password-recovery',
    data: {
      user: props.user?.user,
    },
  })) as any

  if (result.status && result.code === 100) {
    toast.add({
      severity: 'success',
      detail: result.message,
      life: 3000,
    })
  } else {
    toast.add({
      severity: 'error',
      summary: '¡Uppss!',
      detail: result.message,
      life: 3000,
    })
  }
  time.value = 30
  startCount()
}
</script>
<template>
  <form>
    <nuxt-link class="mb-3" :to="localePath({ path: '/' })">
      <img width="35" src="/icons/arrow.svg" alt="volver"
    /></nuxt-link>
    <h1 class="bebasneue-bold mb-0">{{ $t('title.validateCode') }}</h1>
    <p class="mt-1 mb-2">{{ $t('text.validateCode') }}</p>
    <div class="flex justify-content-center mt-5">
      <v-otp-input
        ref="otpInput"
        v-model:value="bindModal"
        input-classes="otp-input"
        separator=""
        :num-inputs="4"
        :should-auto-focus="true"
        input-type="letter-numeric"
        @on-complete="handleOnComplete"
      />
    </div>
    <div class="mt-6">
      <p v-if="time !== 0">{{ $t('text.code', { data: time }) }}</p>
      <p v-else class="cursor-pointer underline" @click="sendCode">
        {{ $t('button.resendCode') }}
      </p>
    </div>
  </form>
</template>
