<template>
  <div class="home">
    <input type="text" v-model="search" />
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>
    <br />
    <button @click="handleEvent">Stop watching</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  setup() {
    const search = ref("");
    const names = ref(["Mario", "Romul", "Teo", "Joi", "Amper"]);
    const filteredNames = computed(() => {
      return names.value.filter((name) =>
        name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    const stopWatch = watch(search, () => {
      console.log("watch");
    });
    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect");
    });
    const handleEvent = () => {
      stopWatch();
      stopWatchEffect();
    };
    return {
      search,
      filteredNames,
      names,
      handleEvent,
    };
  },
};
</script>
