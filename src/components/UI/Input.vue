<template>
  <input type="text" :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: [String, Number],
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
</style>
