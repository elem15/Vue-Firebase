<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="err">{{ err }}</div>
    <Posts :posts="tagPosts" v-else-if="tagPosts.length" />
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from "../compositions/getPosts";
import Spinner from "../components/Spinner.vue";
import Posts from "../components/Posts.vue";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  components: { Posts, Spinner },
  setup() {
    const route = useRoute();
    const { posts, err, load } = getPosts();
    load();
    const tag = route.params.tag;
    const tagPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tag));
    });
    return { tagPosts, err };
  },
};
</script>

<style>
</style>