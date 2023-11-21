<template>
  <section class="w-screen h-screen">
    <header class="w-full">
      <ul class="flex justify-content-between w-4 mx-auto pt-4">
        <li v-for="item of listModules" :key="item.text">
          <NuxtLink :to="item.url">{{ item.text }}</NuxtLink>
        </li>
      </ul>
    </header>
    <main class="w-6 mx-auto pt-8">
      <slot />
    </main>
    <footer></footer>
  </section>
</template>

<script setup lang="ts">
const listModules = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Services',
    url: '/services',
  },
  {
    text: 'About',
    url: '/about',
  },
]
</script>

<style scoped>
ul,
li {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
</style>
