export default {
  mounted(el, binding) {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    })
    intersectionObserver.observe(el)
  },
  name: 'observer',
}
