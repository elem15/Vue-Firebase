<template>
  <form @keypress.enter.prevent="handleSubmit">
    <textarea
      placeholder="Type message and press enter to send"
      v-model="message"
      required
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/Firebase/config";
import { ref } from "vue";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("messages");
    const handleSubmit = async () => {
      const mes = message.value.trim();
      if (!mes) return;
      const body = {
        message: mes,
        user: user.value.displayName,
        createdAt: timestamp(),
      };
      await addDoc(body);
      if (!error.value) message.value = "";
    };
    return { user, handleSubmit, message, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  border: none;
  width: 100%;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  font-style: inherit;
  outline: none;
}
</style>