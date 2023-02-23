<template>
  <div v-if="err">{{ err }}</div>
  <div v-else-if="post" class="post">
    <div>
      <h3>{{ post.title }}</h3>
    </div>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
    <button class="delete" @click="handleDelete">Delete</button>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../compositions/getPost";
import Spinner from "../components/Spinner.vue";
import { firebaseProject } from "../firebase/config";
import { useRouter } from "vue-router";

export default {
  components: {
    Spinner,
  },
  props: ["id"],
  setup(props) {
    const { post, err, load } = getPost(props.id);
    const router = useRouter();
    load();
    const handleDelete = async () => {
      try {
        await firebaseProject.collection("posts").doc(props.id).delete();
        router.push({ name: "Home" });
      } catch {
        err.value = "something went wrong";
        console.log("something went wrong");
      }
    };
    return { post, err, handleDelete };
  },
};
</script>

<style>
button.delete {
  margin: 10px;
  cursor: pointer;
  text-align: center;
}
</style>