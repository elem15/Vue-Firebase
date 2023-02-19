<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Project :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "../components/Project.vue";

export default {
  name: "HomeView",
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
  },
};
</script>
