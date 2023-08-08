<script setup>
import { ref, watchEffect, onMounted } from 'vue'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()

const userData = useCookie('userData')

// variables
const items = ref([
  {
    text: t('menu.report'),
    img: 'ic_reports',
    to: '/dashboard',
  },
  {
    text: t('menu.admin'),
    img: 'ic_admin',
    to: '/administrators',
  },
])
const actualPage = ref('')

const validateRol = (page) => {
  const item = items.value.filter((item) => page.includes(item.to))

  if (item.length > 0) {
    return true
  } else {
    router.push(localePath({ path: items.value[0].to }))
    return false
  }
}

onMounted(() => {
  if (userData.value) {
    actualPage.value = route.path
  } else {
    userData.value = ''
    router.push(localePath({ path: '/' }))
  }
})

watchEffect(() => {
  actualPage.value = router.currentRoute.value.path
  validateRol(actualPage.value)
})
</script>
<template>
  <div v-if="userData" class="app-wraper">
    <aside class="menu-aplication">
      <div class="user-information">
        <img src="/icons/ic_logo.svg" alt="logo" />
        <p for="fullname">{{ userData.fullname }}</p>
      </div>
      <div class="menu-content">
        <nuxt-link
          v-for="(item, index) in items"
          :key="index"
          class="item-menu"
          :to="localePath(item.to)"
        >
          <img :src="`/icons/${item.img}.svg`" :alt="item.text" />
          <span>{{ item.text }}</span>
        </nuxt-link>
      </div>
    </aside>
    <main class="main-application">
      <nav class="nav-application">
        <DefaultBreadcrumb />
        <div class="flex gap-2"></div>
      </nav>
      <div class="content-application">
        <slot />
      </div>
    </main>
  </div>
</template>
