<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import Post from "./Post.vue";
export default {
  props: ["posts"],
  components: {
    Post,
  },
  setup() {
    onMounted(() => console.log("mounted"));
    onUnmounted(() => console.log("unmounted"));
    onUpdated(() => console.log("updated"));
  },
};
</script>

<style>
</style>