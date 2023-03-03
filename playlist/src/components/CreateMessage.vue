<template>
  <form @submit.prevent="onSubmit">
    <label>Message</label>
    <input type="text" v-model="message" />
    <button>Send message</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/Firebase/config";
export default {
  setup() {
    const message = ref("");
    const { addDoc, error } = useCollection("messages");
    const onSubmit = async () => {
      const body = {
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(body);
    };
    return { message, onSubmit };
  },
};
</script>

<style>
</style>