<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  props: ["posts"],
  components: {
    Post,
  },
};
</script>

<style>
</style>