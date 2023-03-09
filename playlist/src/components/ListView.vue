<template>
  <div class="content">
    <div v-for="doc in formatDocuments" :key="doc.id">
      <ListItem :doc="doc" />
    </div>
    <div v-if="error" class="error">{{ error.message }}</div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  props: ["error", "formatDocuments"],
  components: {
    ListItem,
  },
};
</script>

<style>
</style>