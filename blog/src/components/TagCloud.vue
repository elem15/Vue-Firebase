<template>
  <div class="tag-cloud">
    <h1>Tags</h1>
    <router-link
      :to="{ name: 'Tags', params: { tag } }"
      v-for="tag in tags"
      :key="tag"
    >
      #{{ tag }}</router-link
    >
  </div>
</template>

<script>
import getTags from "../compositions/getTags";
export default {
  props: ["posts"],
  setup(props) {
    const { tags } = getTags(props.posts);
    return { tags };
  },
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>