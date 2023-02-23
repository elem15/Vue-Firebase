<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" v-bind:delay="delay" @reaction="endGame"/>
  <Results v-if="showResult" v-bind:score="score"/>
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue"
export default {
  name: "App",
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.delay = 1000 + Math.random() * 3000;
      this.isPlaying = true;
      this.showResult = false;      
    },
    endGame(time) {
      this.score = time;
      this.isPlaying = false;
      this.showResult = true;      
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: green;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
}
button[disabled] {
  background: lightseagreen;
  color: gainsboro;
}
</style>
