<template>
  <form @submit.prevent="handleSubmit">
    <h2>Sign up</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button v-if="!isPending">Sign up</button>
    <button v-else>Loading</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { error, isPending, signup } from "@/composables/useAuth";
import router from "@/router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      const userData = {
        email: email.value,
        password: password.value,
      };
      await signup(userData);
      if (!error.value) {
        router.push("/");
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>