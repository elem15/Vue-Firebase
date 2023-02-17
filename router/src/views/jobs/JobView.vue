<template>
  <div>
    <h1>The job details</h1>
    <h2>{{ getJob.title }}</h2>
    <p>{{ getJob.details }}</p>
  </div>
</template>

<script>
import jobs from "../../assets/jobs.js";

export default {
  props: ["id"],
  computed: {
    getJob() {
      return jobs.find((job) => job.id === +this.id);
    },
  },
};
</script>

<style>
</style>