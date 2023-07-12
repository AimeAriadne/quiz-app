<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

</script>

<template>
  <h2 class="quiz-text">{{ text }}</h2>
</template>

<style scoped>
.quiz-text {
  @apply
  text-slate-200
    text-center
    text-4xl
    p-4
    border-b-solid
    border-b-[1px]
}
</style>