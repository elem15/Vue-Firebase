<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Name"
      autocomplete="current-name"
      v-model="displayName"
    />
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
    <button v-if="!isPending">Sign Up</button>
    <button v-else disabled>Load</button>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useSignup from "@/composables/useSignup";
import { useRouter } from "vue-router";
const router = useRouter();
const { error, signup, isPending } = useSignup();
onMounted(() => {
  error.value = null;
});
const displayName = ref("");
const email = ref("");
const password = ref("");
const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value);
  if (!error.value) {
    console.log("User is logged");
    router.push({ name: "UserPlaylist" });
  }
};
</script>

<style>
</style>