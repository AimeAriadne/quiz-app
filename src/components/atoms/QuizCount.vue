<script setup lang="ts">
const props = defineProps<{
  count: string
}>()
</script>

<template>
  <p class="quiz-count">{{ count }}</p>
</template>

<style scoped>
.quiz-count {
  @apply
    text-slate-100
    font-semibold
}
</style>