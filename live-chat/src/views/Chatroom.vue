<template>
  <div class="container">
    <NavBar />
    <NewChatForm />
    <Messages />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Messages from "../components/Messages.vue";
import NewChatForm from "../components/NewChatForm.vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import { watch } from "vue";
export default {
  components: {
    NavBar,
    NewChatForm,
    Messages,
  },
  setup() {
    const router = useRouter();
    const { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
</style>