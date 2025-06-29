<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style scoped>
.btn {
  padding: 0.75rem;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
</style>
