<template>
  <div class="home">
    <input type="text" v-model="search" />
    <div v-for="(name, idx) in filteredNames" :key="idx + name">{{ name }}</div>
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
    const names = ref([
      "Mario",
      "Romul",
      "Teo",
      "Teod",
      "Teodor",
      "Joi",
      "Amper",
    ]);
    const filteredNames = computed(() => {
      return names.value.filter((name) =>
        name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    const stopWatch = watch(search, () => {
      console.log("watch");
    });
    const stopWatchEffect = watchEffect(() => {
      // const newNames = [...filteredNames.value];
      names.value = [...names.value, ...names.value];
      console.log("watchEffect", filteredNames.value);
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
