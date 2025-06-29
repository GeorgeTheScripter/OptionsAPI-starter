export default {
  props: {
    show: Boolean,
    default: false,
  },
  methods: {
    hidePopup() {
      this.$emit('update:show', false)
    },
  },
}
