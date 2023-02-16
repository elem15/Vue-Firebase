<template>
  <SignUp />
</template>

<script>
import SignUp from "./components/SignUp.vue";

export default {
  name: "App",
  components: {
    SignUp,
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  background-color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
