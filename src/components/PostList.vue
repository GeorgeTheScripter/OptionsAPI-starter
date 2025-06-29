<template>
  <div class="posts" v-if="posts.length > 0">
    <transition-group name="list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete="$emit('delete', post.id)"
      />
    </transition-group>
  </div>
  <div v-else>
    <h3>No posts</h3>
  </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.list-move, /* применять переход к движущимся элементам */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(0px);
}

/* убедитесь, что удаляющиеся элементы выведены из потока, чтобы 
анимации перемещения могли быть рассчитаны правильно. */
.list-leave-active {
  position: fixed;
}
</style>
