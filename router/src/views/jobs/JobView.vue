<template>
  <div v-if="job">
    <h1>The job details</h1>
    <h2>{{ job.title }}</h2>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>Loading job details...</div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((job) => (this.job = job))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>