<template>
  <div class="container"><NavBar /></div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useRouter } from "vue-router";
import getUser from "@/compositions/getUser";
import { watch } from "vue";
export default {
  components: {
    NavBar,
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