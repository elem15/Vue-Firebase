<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="err" class="error">{{ err }}</div>
    <div class="layout" v-else-if="posts.length">
      <Posts :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import Posts from "../components/Posts";
import getPosts from "../compositions/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  components: {
    Posts,
    Spinner,
    TagCloud,
  },
  setup() {
    const { posts, err, load } = getPosts();
    load();
    return { posts, err };
  },
};
</script>

<style>
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
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>