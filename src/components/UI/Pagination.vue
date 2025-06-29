<template>
  <div class="pages_wrapper">
    <div
      class="page"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{
        page__current: page === pageNumber,
      }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },

  methods: {
    changePage(pageNumber) {
      this.$emit('changePage', pageNumber)
    },
  },
}
</script>

<style scoped>
.pages_wrapper {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 32px 0;
}

.page {
  font-size: 20px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  color: #fff;
  cursor: pointer;
}

.page__current {
  background: red;
}
</style>
