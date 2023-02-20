<template>
  <NavFilter @filter="current = $event" :current="current" />
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <Project
          :project="project"
          @delete="handleDelete"
          @patch="handleUpdate"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "../components/Project.vue";
import NavFilter from "../components/NavFilter.vue";

export default {
  name: "HomeView",
  components: {
    Project,
    NavFilter,
  },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  async created() {
    const data = await this.fetchProjects();
    this.projects = data;
  },
  computed: {
    filteredProjects() {
      const data = this.projects;
      if (this.current === "completed") {
        return data.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return data.filter((project) => !project.complete);
      }
      return data;
    },
  },
  methods: {
    async fetchProjects() {
      const res = await fetch("http://localhost:3000/projects");
      const data = await res.json();
      return data;
    },
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
