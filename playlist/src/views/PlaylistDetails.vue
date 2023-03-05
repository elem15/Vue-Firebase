<template>
  <div v-if="document">
    <h1>{{ document.title }}</h1>
    <p>{{ document.description }}</p>
    <div class="thumbnail">
      <img :src="document.coverUrl" alt="" />
    </div>
    <p>Created by: {{ document.userName }}</p>
    <p>Created at: {{ document.createdAt }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import getDocument from "@/composables/getDocument";
export default {
  props: ["id"],
  setup(params) {
    const docId = ref(params.id);
    const { error, document } = getDocument("playlists", docId.value);
    return { docId, error, document };
  },
};
</script>

<style>
</style>