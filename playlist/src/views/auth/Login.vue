<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="email"
      placeholder="Email"
      autocomplete="current-email"
      v-model="email"
    />
    <input
      type="password"
      placeholder="Password"
      autocomplete="current-password"
      v-model="password"
    />
    <button v-if="!isPending">Log In</button>
    <button v-else disabled>Load</button>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script>
import { onMounted, ref } from "vue";
import useLogin from "@/composables/useLogin";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, login, isPending } = useLogin();
    const router = useRouter();
    onMounted(() => {
      error.value = null;
    });
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("User is logged");
        router.push({ name: "UserPlaylist" });
      }
    };
    return { error, isPending, email, password, handleSubmit };
  },
};
</script>

<style>
</style>