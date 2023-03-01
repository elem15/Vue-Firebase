<template>
  <p>Your result is: {{ score }} ms</p>
  <div class="rank">{{ rank }}</div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: "",
    };
  },
  mounted() {
    this.rank =
      this.score < 320
        ? "Super speed!"
        : this.score < 450
        ? "Normal speed."
        : "Too slowly...";
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: green;
}
</style>