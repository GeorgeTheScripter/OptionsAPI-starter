<template>
  <div class="post">
    <span class="post__id">{{ post.id }}</span>
    <h3>{{ post.title }}</h3>
    <h4>{{ post.body }}</h4>
    <div class="post_btns">
      <Button @click="$router.push(`/users/${post.id}`)">Read more</Button>
      <Button @click="$emit('delete', post.id)">delete post</Button>
    </div>
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
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.post__id {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.post h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.post h4 {
  margin: 0 0 1rem 0;
  color: #666;
  font-weight: normal;
  font-size: 1rem;
}

.post_btns {
  display: flex;
  gap: 12px;
}
</style>
