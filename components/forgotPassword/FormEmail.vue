<script setup>
const emit = defineEmits(["change"]);

const { t } = useI18n();
const localePath = useLocalePath();
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

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
const onSubmit = handleSubmit((values) => {
  console.log(values);

  emit("change", { data: values, change: "validateCode" });
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
