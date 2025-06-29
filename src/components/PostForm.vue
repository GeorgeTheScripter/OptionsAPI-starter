<template>
  <form class="form" @submit.prevent="createNewPost">
    <Input v-focus type="text" v-model="post.title" placeholder="post title" />
    <Input type="text" v-model="post.description" placeholder="post description" />
    <Button class="btn">add post</Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    createNewPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        description: '',
      }
    },
  },
}
</script>

<style scoped>
.form {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
