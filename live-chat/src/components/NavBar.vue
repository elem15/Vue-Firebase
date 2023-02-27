<template>
  <nav v-if="user">
    <div>
      <p>Hi there {{ user.displayName }}</p>
      <p>Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import getUser from "@/compositions/getUser";
import useLogout from "../compositions/logout";

export default {
  setup() {
    const { err, logout } = useLogout();
    const { user } = getUser();
    const handleLogout = async () => {
      await logout();
    };
    return { err, handleLogout, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>