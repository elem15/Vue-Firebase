<template>
  <nav class="filter-nav">
    <button @click="handleFilter('all')" :class="{ active: current === 'all' }">
      Display All
    </button>
    <button
      @click="handleFilter('completed')"
      :class="{ active: current === 'completed' }"
    >
      Display completed
    </button>
    <button
      @click="handleFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      Display ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    handleFilter(by) {
      this.$emit("filter", by);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>