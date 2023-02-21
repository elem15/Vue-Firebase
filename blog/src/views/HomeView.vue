<template>
  <div class="home">
    <input type="text" v-model="filterValue" />
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  setup() {
    const filterValue = ref("");
    const names = ref(["Mario", "Romul", "Teo", "Joi", "Amper"]);
    const filteredNames = computed(() => {
      return names.value.filter((name) =>
        name.toLowerCase().includes(filterValue.value.toLowerCase())
      );
    });
    return {
      filterValue,
      filteredNames,
      names,
    };
  },
};
</script>
