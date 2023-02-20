<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }}. I'm {{ age }} years old</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Increase age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src

export default {
  setup() {
    const name = ref("Mario");
    const age = ref(44);
    const handleClick = () => {
      name.value = "Nikita";
      age.value = 33;
    };
    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
