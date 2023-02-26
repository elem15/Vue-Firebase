<template>
  <form @submit.prevent="handleSubmit">
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
import useLogin from "@/compositions/login";
export default {
  setup() {
    const { err, login } = useLogin();
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      const user = await login(email.value, password.value);
      console.log(user);
    };
    return { email, password, handleSubmit, err };
  },
};
</script>

<style>
</style>