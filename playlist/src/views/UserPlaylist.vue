<template>
  <h2>My playlist</h2>
  <ListView :error="error" :formatDocuments="formatDocuments" />
</template>

<script >
import getCollection from "@/composables/getCollection";
import { computed } from "vue";
import getUser from "@/composables/getUser";
import ListView from "@/components/ListView.vue";
export default {
  components: {
    ListView,
  },
  setup() {
    const { user } = getUser();
    const { error, documents } = getCollection("playlists", [
      "userId",
      "==",
      user.value.uid,
    ]);
    const formatDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          const date = doc.createdAt.toDate();
          return { ...doc, createdAt: date };
        });
      }
    });
    return { error, formatDocuments };
  },
};
</script>

<style>
h2 {
  text-align: center;
}
</style>