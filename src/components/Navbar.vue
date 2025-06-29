<template>
  <div>
    <div class="container">
      <div class="navbar">
        <!-- <div>LOGO</div>

        <nav class="nav">
          <router-link to="/">main</router-link>
          <router-link to="/about">about</router-link>
          <router-link to="/users">users</router-link>
        </nav> -->
        <div @click="$router.push('/')">logo</div>

        <div class="nav">
          <Button @click="$router.push('/')">Main</Button>
          <Button @click="$router.push('/about')">About</Button>
          <Button @click="$router.push('/users')">Users</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  gap: 12px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
}
</style>
