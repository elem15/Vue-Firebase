<template>
  <div class="home">
    <h1>Home</h1>
    <div class="create">
      <router-link :to="{ name: 'Create' }">
        <button>Add new task</button>
      </router-link>
    </div>
    <div v-if="err">{{ err }}</div>
    <Posts :posts="posts" v-else-if="posts.length" />
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import Posts from "../components/Posts";
import getPosts from "../compositions/getPosts";
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    Posts,
    Spinner,
  },
  setup() {
    const { posts, err, load } = getPosts();
    load();
    return { posts, err };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
button {
  margin-top: 0;
}
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>