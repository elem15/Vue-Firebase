<template>
  <div class="home">
    <ListView :error="error" :formatDocuments="formatDocuments" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListView from "@/components/ListView.vue";
import getCollection from "@/composables/getCollection";

import { computed } from "vue";
export default {
  name: "HomeView",
  components: {
    ListView,
  },
  setup() {
    const { error, documents } = getCollection("playlists");
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
