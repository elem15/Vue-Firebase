<template>
  <div class="content">
    <div v-for="doc in formatDocuments" :key="doc.id">
      <ListItem :doc="doc" />
    </div>
    <div v-if="error" class="error">{{ error.message }}</div>
  </div>
</template>

<script setup>
import getCollection from "@/composables/getCollection";
import ListItem from "./ListItem.vue";

import { computed, onMounted } from "vue";

const { error, documents } = getCollection("playlists");
const formatDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      const date = doc.createdAt.toDate();
      return { ...doc, createdAt: date };
    });
  }
});
onMounted(() => {
  if (!error.value) {
    console.log(formatDocuments);
  }
});
</script>

<style>
</style>