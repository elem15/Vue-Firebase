<template>
  <div class="home">
    <ListView />
  </div>
</template>

<script>
// @ is an alias to /src
import ListView from "@/components/ListView.vue";
export default {
  name: "HomeView",
  components: {
    ListView,
  },
};
</script>
