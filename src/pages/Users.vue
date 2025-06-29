<template>
  <div>
    <Popup v-model:show="popupVisible">
      <PostForm @create="addNewPost" />
    </Popup>

    <div class="container">
      <div class="controllers">
        <Button @click="showPopup">cereate post</Button>
        <div class="search_controllers">
          <Select v-model="sortType" :options="sortOptions" />
          <Input v-focus v-model="searchQuery" placehoder="Search..." />
        </div>
      </div>

      <PostList v-if="!isPostLoading" :posts="searchedAndSortedPosts" @delete="removePost" />
      <div v-else>Loading...</div>
      <div v-observer="loadMorePosts" ref="observer" class="observer"></div>

      <!-- <Pagination :page="page" :totalPages="totalPages" @changePage="changePage" /> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [],
      popupVisible: false,
      isPostLoading: false,
      sortType: 'description',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'title' },
        { value: 'description', name: 'description' },
      ],
    }
  },
  methods: {
    addNewPost(post) {
      this.posts.push(post)
      this.popupVisible = false
    },
    removePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id)
    },
    showPopup() {
      this.popupVisible = true
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isPostLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.fetchPosts()
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.sortType]?.localeCompare(post2[this.sortType]),
      )
    },
    searchedAndSortedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },

  watch: {
    page() {
      // this.fetchPosts()
    },
  },
}
</script>

<style scoped>
.observer {
  height: 30px;
  width: 100%;
  background: pink;
}

.controllers {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.search_controllers {
  display: flex;
  gap: 12px;
}
</style>
