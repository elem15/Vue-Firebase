<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'Home' }">Music</router-link></h1>
      <div class="links">
        <div v-if="user" class="links-visible">
          <router-link :to="{ name: 'CreatePlaylist' }"
            >Create playlist</router-link
          >
          <router-link :to="{ name: 'UserPlaylist' }"
            >User playlist</router-link
          >
          <span class="name">Hi here, {{ user.displayName }}!</span>
          <button @click="handleLogout" v-if="!isPending">Log out</button>
          <button v-else disabled>Waiting</button>
        </div>
        <div v-else class="links-visible">
          <router-link :to="{ name: 'Login' }" class="btn">Log in</router-link>
          <router-link :to="{ name: 'Signup' }" class="btn"
            >Sign up</router-link
          >
        </div>
      </div>
    </nav>
  </div>
  <div class="error">{{ error }}</div>
</template>

<script setup>
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";
const router = useRouter();
const { error, isPending, logout } = useLogout();
const { user } = getUser();

const handleLogout = async () => {
  await logout();
  router.push({ name: "Login" });
};
</script>

<style scoped>
.navbar {
  margin: 20px 0;
  padding: 20px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  border: 1px solid var(--secondary);
}
nav {
  display: flex;
  align-items: baseline;
}
.links {
  margin-left: auto;
}
.links-visible {
  display: flex;
  align-items: baseline;
}
button,
.btn {
  margin-left: 10px;
}
a {
  margin-left: 10px;
}
.name {
  display: inline-block;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid var(--secondary);
}
</style>