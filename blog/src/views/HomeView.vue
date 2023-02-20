<template>
  <div class="home">
    <h1>Ref</h1>
    <p>My name is {{ first.name }}. I'm {{ first.age }} years old</p>
    <button @click="handleClick">Click me</button>
    <button @click="first.age++">Increase age</button>
    <input type="text" v-model="first.name" />
    <h2>Reactive</h2>
    <p>My name is {{ second.name }}. I'm {{ second.age }} years old</p>
    <button @click="handleReactive">Click me</button>
    <button @click="second.age++">Increase age</button>
    <input type="text" v-model="second.name" />
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
// @ is an alias to /src

export default {
  setup() {
    const first = ref({ name: "Mario", age: 44 });
    const handleClick = () => {
      first.value.name = "Nikita";
      first.value.age = 33;
    };
    const second = reactive({ name: "Romano", age: 35 });
    const handleReactive = () => {
      second.name = "Enrico";
      second.age = 37;
    };
    return {
      first,
      second,
      handleClick,
      handleReactive,
    };
  },
};
</script>
