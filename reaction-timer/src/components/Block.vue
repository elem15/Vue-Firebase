<template>
  <div v-if="isShowing" @click="stopTimer" class="block">Click me!</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      isShowing: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("reaction", this.reactionTime);
    },
  },
  mounted() {
    setTimeout(() => {
      this.isShowing = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {},
  unmounted() {},
};
</script>

<style scoped>
.block {
  width: 50vw;
  height: 100px;
  background: darkgreen;
  border-radius: 20px;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>>
