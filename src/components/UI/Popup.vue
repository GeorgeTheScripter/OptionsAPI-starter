<template>
  <div class="popup" v-show="show" @click.stop="hidePopup">
    <div @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name: 'Popup',
  mixins: [toggleMixin],
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}
</style>
