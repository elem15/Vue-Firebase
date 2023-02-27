<template>
  <div class="chat-window">
    <div v-if="formatDocuments.length" class="messages" ref="messagesRef">
      <input type="text" value="theme" />
      <div v-for="doc in formatDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
    <div class="error">{{ error }}</div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onMounted, onUpdated, ref } from "vue";
export default {
  setup() {
    const messagesRef = ref(null);
    const { documents, error } = getCollection("messages");
    const formatDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          const time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    onUpdated(() => {
      messagesRef.value.scroll({
        top: messagesRef.value.scrollHeight,
        behavior: "smooth",
      });
      // messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
    });
    return { error, formatDocuments, messagesRef };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
  border-radius: 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>