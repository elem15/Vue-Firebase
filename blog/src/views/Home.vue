<template>
  <h1>Home</h1>
  <div v-if="err">{{ err }}</div>
  <Posts :posts="posts" v-else-if="posts.length" />
  <div v-else>Loading...</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Posts from "./Posts.vue";
export default {
  components: {
    Posts,
  },
  setup() {
    const posts = ref([]);
    const err = ref(null);
    const load = async () => {
      try {
        const res = await fetch("http://localhost:3000/projects");
        if (!res.ok) {
          throw new Error("no data available");
        }
        const data = await res.json();
        posts.value = data;
      } catch (e) {
        err.value = e.message;
      }
    };
    load();
    return { posts, err };
  },
};
</script>

<style>
</style>