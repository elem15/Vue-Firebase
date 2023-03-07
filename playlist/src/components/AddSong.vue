<template>
  <div class="add-song">
    <button v-if="!isForm" @click="isForm = true">New song</button>
    <form v-if="isForm" @submit.prevent="handleSubmit">
      <input type="text" placeholder="Song title" v-model="title" />
      <input type="text" placeholder="Artist" v-model="artist" />
      <button>Add song</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useDocument from "@/composables/useDocument";
export default {
  props: ["id"],
  setup(props) {
    const docId = props.id;
    const title = ref("");
    const artist = ref("");
    const isForm = ref(false);
    const { updatePlaylist } = useDocument("playlists", docId);
    const handleSubmit = async () => {
      const song = {
        title: title.value,
        artist: artist.value,
        songId: Math.floor(Math.random() * 1000000),
      };
      title.value = "";
      artist.value = "";
      isForm.value = false;
      await updatePlaylist(song);
    };
    return { title, artist, isForm, handleSubmit };
  },
};
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 40px;
}
form {
  max-width: 100%;
  text-align: left;
}
</style>