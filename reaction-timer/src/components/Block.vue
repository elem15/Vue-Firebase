<template>
  <div v-if="isShowing" class="block">Click me!</div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      isShowing: false,
    }
  },
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      this.isShowing = true
    }, this.delay)
  },
  updated() {
    console.log("updated");
  }, 
  unmounted() {
    console.log("unmounted")
  }
}
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
