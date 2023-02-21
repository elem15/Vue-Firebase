<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ trimmedBody }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const trimmedBody = computed(() => {
      return props.post.body.substring(1, 100) + "....";
    });
    return { trimmedBody };
  },
};
</script>

<style>
</style>