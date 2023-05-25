<script setup>
const emit = defineEmits(["change"]);

const { t } = useI18n();
const localePath = useLocalePath();
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { responseApi } from "~/composables/apiServices";
const toast = useToast();

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required(`${t("rule.validation.require")}`)
      .email(`${t("rule.validation.email")}`),
  }),
});

// define variable
const { value: email } = useField("email");

// methods
const onSubmit = handleSubmit(async (values) => {
  console.log(values);

  const result = await apiServices({
    method: "POST",
    url: "onboarding/password-recovery",
    data: {
      user: values.email,
    },
  });

  if (result.status && result.code === 100) {
    emit("change", { data: values, change: "validateCode" });
  } else {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: result.message,
      life: 3000,
    });
  }
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <nuxt-link class="mb-3" :to="localePath({ path: '/' })">
      <img width="35" src="/icons/arrow.svg" alt="volver"
    /></nuxt-link>
    <h1 class="bebasneue-bold mb-0">{{ $t("title.forgotPassword") }}</h1>
    <p class="mt-1 mb-2">{{ $t("text.forgotPassword") }}</p>

    <span class="general-input solo-login">
      <label for="email">
        <div class="flex align-items-center gap-1">
          <img src="/icons/email.svg" alt="email" />
          {{ $t("form.email.label") }}
        </div>
      </label>
      <InputText
        v-model="email"
        :placeholder="$t('form.email.placeholder')"
        type="email"
        :class="{ 'p-invalid': errors['email'] }"
        aria-describedby="text-error"
      />
      <small class="p-error" id="text-error">{{
        errors["email"] || "&nbsp;"
      }}</small>
    </span>

    <Button
      :type="email ? 'submit' : 'button'"
      :disabled="!email"
      class="mt-4 btn"
      :class="{ active: email }"
      :label="$t('button.sendCode')"
    />
  </form>
</template>
