<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Book</h3>

    <label for="title">Book title:</label>
    <input type="text" name="title" v-model="title" required />

    <label for="author">Book author:</label>
    <input type="text" name="author" v-model="author" required />

    <button>Add Book</button>
    <div class="error">{{ error }}</div>
  </form>
  <div v-if="isPending"><Spinner /></div>
</template>

<script>
import useCollection from "@/composables/useCollection";
import { ref } from "vue";
import Spinner from "./Spinner.vue";
export default {
  components: {
    Spinner,
  },
  setup() {
    const title = ref("");
    const author = ref("");

    const { error, isPending, createDoc } = useCollection("books");
    const handleSubmit = async () => {
      console.log(title.value, author.value);
      const document = {
        title: title.value,
        author: author.value,
        isFav: false,
      };
      await createDoc(document);
      title.value = "";
      author.value = "";
    };

    return { handleSubmit, title, author, error, isPending };
  },
};
</script>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>