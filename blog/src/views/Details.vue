<template>
  <div v-if="err">{{ err }}</div>
  <div v-else-if="post" class="post">
    <div>
      <h3>{{ post.title }}</h3>
    </div>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../compositions/getPost";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  props: ["id"],
  setup(props) {
    const { post, err, load } = getPost(props.id);
    load();
    return { post, err };
  },
};
</script>

<style>
</style>