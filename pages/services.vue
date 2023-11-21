<template>
  <div>
    <h1>Services</h1>
    <ul class="list-courses">
      <Course v-for="item of courses.items" :course="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import courses from '@/public/courses.json'
</script>

<style scoped lang="scss">
.list-courses {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 16px;
}
</style>
