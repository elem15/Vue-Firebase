<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="err" class="error">{{ err }}</div>
    <div class="layout" v-else-if="tagPosts.length">
      <Posts :posts="tagPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from "../compositions/getPosts";
import Spinner from "../components/Spinner.vue";
import Posts from "../components/Posts.vue";
import TagCloud from "../components/TagCloud.vue";
import { computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  components: { Posts, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, err, load } = getPosts();
    load();
    const tag = ref(null);
    const tagPosts = computed(() => {
      tag.value = route.params.tag;
      return posts.value.filter((post) => post.tags.includes(tag.value));
    });
    return { tagPosts, err, posts };
  },
};
</script>

<style>
</style>