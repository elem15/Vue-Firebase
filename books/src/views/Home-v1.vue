<template>
  <div class="home">
    <ul v-if="books">
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3>{{ book.title }}</h3>
          <p>By {{ book.author }}</p>
        </div>
        <div class="icon">
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul>
    <div class="error">{{ error }}</div>
    <div v-if="isPending"><Spinner /></div>
    <CreateBookForm />
  </div>
</template>

<script>
import CreateBookForm from "@/components/CreateBookForm";
import Spinner from "@/components/Spinner";
import { error, books, isPending } from "@/composables/getBooks";
export default {
  name: "Home",
  components: { CreateBookForm, Spinner },
  setup() {
    return { books, error, isPending };
  },
};
</script>

<style>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}
</style>