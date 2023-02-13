<template>
  <h1>{{title}}</h1>
  <div>
    <input type="text" ref="name">
    <button @click="handleEvent">Click me</button>
  </div>
  <p>{{text}}</p>
  <Modal />
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',  
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My first Vue App :)',
      text: ''
    }
  },
  methods: {
    handleEvent() {
      const input = this.$refs.name
      console.log(input.value)
      input.className = 'active';
      input.focus();
      this.text = input.value;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.active {
  border-color: green;
}
</style>
