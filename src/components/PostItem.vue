<template>
  <div class="post">
    <span class="post__id">{{ post.id }}</span>
    <h3>{{ post.title }}</h3>
    <h4>{{ post.description }}</h4>
    <Button @click="$router.push(`/users/${post.id}`)">Read more</Button>
    <Button @click="$emit('delete', post.id)">delete post</Button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.post {
  padding: 24px;
  border-radius: 12px;
  background: rgb(211, 211, 211);
}

.post__id {
  font-size: 32px;
  color: red;
}
</style>
