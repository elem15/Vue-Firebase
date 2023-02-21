<template>
  <h1>Nested</h1>
  <button @click="view = !view">Toggle view</button>
  <button @click="posts.pop()">Delete last post</button>
  <Posts :posts="posts" v-if="view" />
</template>

<script>
import { ref } from "@vue/reactivity";
import Posts from "./Posts.vue";
export default {
  components: {
    Posts,
  },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Fashion",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo veniam consequatur omnis, voluptatum necessitatibus! Incidunt, iusto harum et ullam quasi nemo eos magni sed ex maxime adipisci, impedit minima.",
      },
      {
        id: 2,
        title: "Nature",
        body: "Lorem ipsum dolor",
      },
    ]);
    const view = ref(true);
    return { posts, view };
  },
};
</script>

<style>
</style>