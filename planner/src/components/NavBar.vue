<template>
  <nav>
    <router-link :to="{ name: 'home' }">All projects</router-link>
    <router-link :to="{ name: 'ProjectForm' }">Add new project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  text-align: center;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  margin: 0 20px;
  color: cadetblue;
}
a:hover {
  color: darkcyan;
}
.router-link-active {
  padding: 0 0 10px;
  border-bottom: 2px darkcyan solid;
}
</style>