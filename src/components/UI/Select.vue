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

<style scoped>
select {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
}

select:focus {
  outline: none;
  border-color: #646cff;
  box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.1);
}

select option {
  padding: 0.5rem;
}

select option:disabled {
  color: #999;
}
</style>
