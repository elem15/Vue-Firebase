<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="">Title</label>
      <input type="text" v-model="title" required />
    </div>
    <div>
      <label for="">Details</label>
      <textarea v-model="details" required />
    </div>
    <button>Save changes</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
        }),
      })
        .then(() => this.$router.push({ name: "home" }))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>