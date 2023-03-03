<template>
  <div class="home">Welcome</div>
  <CreateMessage />
</template>

<script>
// @ is an alias to /src
import CreateMessage from "@/components/CreateMessage.vue";
export default {
  name: "HomeView",
  components: {
    CreateMessage,
  },
};
</script>
