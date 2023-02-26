<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      autocomplete="display name"
      placeholder="display name"
      v-model="displayName"
      required
    />
    <input
      type="email"
      autocomplete="e-mail"
      placeholder="email"
      v-model="email"
    />
    <input type="password" autocomplete="current-password" v-model="password" />
    <div class="error">{{ err }}</div>
    <button>SignUp</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/compositions/signup";
export default {
  setup(props, context) {
    const { err, signup } = useSignup();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!err.value) {
        context.emit("enterChat");
      }
    };
    return { displayName, email, password, handleSubmit, err };
  },
};
</script>

<style>
</style>