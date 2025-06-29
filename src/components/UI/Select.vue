<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled>choose option</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style scoped></style>
