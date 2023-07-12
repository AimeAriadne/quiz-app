<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <button class="quiz-btn">
    {{ label }}
  </button>
</template>

<style>
.quiz-btn {
  @apply
    text-slate-100
    bg-blue-700
    text-base
    border-0
    w-28
    py-2
}

.quiz-btn:disabled {
  @apply
    bg-blue-400
    cursor-not-allowed
}
</style>