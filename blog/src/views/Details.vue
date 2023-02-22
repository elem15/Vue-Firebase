<template>
  <div v-if="err">{{ err }}</div>
  <div v-else-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../compositions/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    Spinner,
  },
  props: ["id"],
  setup() {
    const route = useRoute();
    const { post, err, load } = getPost(route.params.id);
    load();
    return { post, err };
  },
};
</script>

<style>
</style>