<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Project
          :project="project"
          @delete="handleDelete"
          @patch="handleUpdate"
        />
      </div>
    </div>
    <div>
      <router-link :to="{ name: 'ProjectForm' }">Add new task</router-link>
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
    handleUpdate(id) {
      const project = this.projects.find((project) => project.id === id);
      project.complete = !project.complete;
    },
  },
};
</script>
