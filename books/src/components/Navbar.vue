<template>
  <div>
    <nav>
      <h1>My Book List</h1>

      <!-- for logged in users -->
      <div v-if="user">
        <router-link to="/">Home</router-link>
        <button @click="logout" v-if="!isPending">Logout</button>
        <button v-else>Process</button>
      </div>

      <!-- for logged out users -->
      <div v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
    <div v-if="user">Logged as {{ user.email }}</div>
    <div style="text-align: right" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { user } from "@/composables/useAuth";
import { auth } from "@/Firebase/config";
import router from "@/router";
import { signOut } from "firebase/auth";
import { ref, watchEffect } from "vue";

const error = ref(null);
const isPending = ref(false);
const logout = async () => {
  error.value = null;
  isPending.value = true;
  try {
    await signOut(auth);
    error.value = null;
    isPending.value = false;
  } catch (e) {
    error.value = "can't logout'";
    isPending.value = false;
    console.log(e.message);
  }
};
watchEffect(() => {
  if (!user.value) {
    router.push({ name: "Login" });
  }
});
</script>

<style>
nav {
  display: flex;
  align-items: center;
}
nav h1 {
  margin-right: auto;
  margin-bottom: 0;
}
nav a {
  margin-left: 16px;
  color: #2c3e50;
}
nav button {
  margin-left: 16px;
}
nav a.router-link-exact-active {
  color: #0ec58e;
}
nav + p {
  margin-top: 0;
  margin-bottom: 30px;
}
</style>