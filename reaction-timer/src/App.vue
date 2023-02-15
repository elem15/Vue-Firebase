<template>
  <div>
    <button @click="handleStartEvent">Start Game!</button>
  </div>
  <div>
    <button v-show="isTimerButton" @click="handleFinishEvent">Catch it!</button>
  </div>
  <div>
    <span v-show="isResultView">Your reaction speed: {{resultedSec}} seconds, {{resultedMSec}} ms</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isTimerButton: false,
      isResultView: false,
      result: 0,
      resultedSec: 0,
      resultedMSec: 0,
      startTime: 0,
      finishTime: 0,
    }
  },
  methods: {
    handleStartEvent() {
      setTimeout(() => {
        this.isTimerButton = true;
        this.startTime = new Date();
      }, 1000)
    },
    handleFinishEvent() {
      this.finishTime = new Date();
      this.result = this.finishTime - this.startTime;
      this.resultedSec = Math.trunc((this.result / 1000));
      this.resultedMSec = this.result - this.resultedSec * 1000; 
      this.isTimerButton = false;
      this.isResultView = true;
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
</style>
