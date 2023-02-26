<template>
  <div class="welcome container">
    <div v-if="loggedIn">
      <h3>Login</h3>
      <SignIn />
      <div>
        Not account yet? <span @click="loggedIn = !loggedIn">Sign Up</span>!
      </div>
    </div>
    <div v-else>
      <h3>Sign Up</h3>
      <SignUp />
      <div>
        Already registered? <span @click="loggedIn = !loggedIn">Login</span>!
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import { ref } from "vue";
export default {
  components: {
    SignUp,
    SignIn,
  },
  setup() {
    const loggedIn = ref(false);
    return { loggedIn };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>