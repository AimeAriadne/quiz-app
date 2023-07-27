<script setup lang="ts">
const props = defineProps<{
  value: string,
  disabled?: boolean,
  modelValue: string | null, 
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

// const value = computed({
//   get() {
//     return props.modelValue
//   },
//   set(value) {
//     emit('update:modelValue', value)
//   }
// })
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="quiz-option">
    <input 
      v-bind="$attrs"
      :id="value"
      :value="value"
      :disabled="disabled"
      type="radio"
      :checked="modelValue === value"
      @change="emit('update:modelValue', value)"
    >

    <label :for="value">{{ value }}</label>
  </div>
</template>

<style scoped>
.quiz-option {
  @apply
    flex
    gap-2
}
</style>