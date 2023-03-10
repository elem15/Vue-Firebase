<template>
  <div class="home">
    <ul v-if="books">
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3 @click="removeDoc(book.id)">{{ book.title }}</h3>
          <p>By {{ book.author }}</p>
        </div>
        <div
          class="icon"
          :class="{ fav: book.isFav }"
          @click="setFav(book.id, book.isFav)"
        >
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
import getCollection from "@/composables/getCollection";
import useCollection from "@/composables/useCollection";
import { user } from "@/composables/useAuth";
export default {
  name: "Home",
  components: { CreateBookForm, Spinner },
  setup() {
    const { error, books, isPending } = getCollection("books", [
      "userId",
      "==",
      user.value.uid,
    ]);
    const { removeDoc, changeDoc } = useCollection("books");
    const setFav = async (id, fav) => {
      await changeDoc(id, {
        isFav: !fav,
      });
    };
    return { books, error, isPending, removeDoc, setFav };
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
.icon.fav {
  color: #c00000;
}
</style>