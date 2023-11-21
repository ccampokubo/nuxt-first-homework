<script setup lang="ts">
interface Course {
  title: string
  price: number
  category: string
  coverLink: string
}
defineProps<{
  course: Course
}>()
</script>

<template>
  <li class="item-course">
    <h4>{{ course.title }}</h4>
    <div class="flex justify-content-between">
      <div>
        <p class="text-xs">Price</p>
        <span>${{ course.price }}</span>
      </div>
      <div class="text-right">
        <p class="text-xs">Category</p>
        <span>{{ course.category }}</span>
      </div>
    </div>
    <img
      :src="course.coverLink"
      :alt="`La portada del curso ${course.title}`"
      :title="`Título del curso${course.title}`"
    />
  </li>
</template>

<style scoped lang="scss">
h4,
p {
  margin: 0px;
}
.item-course {
  border: 1px solid #fcf;
  border-radius: 6px;
  padding: 16px 16px;
}
.item-course img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
