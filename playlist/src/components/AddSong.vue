<template>
  <div class="add-song">
    <button v-if="!isForm" @click="isForm = true">New song</button>
    <form v-if="isForm" @submit.prevent="handleSubmit">
      <input type="text" placeholder="Song title" v-model="title" required />
      <input type="text" placeholder="Artist" v-model="artist" />
      <button>Add song</button>
      <div class="close" @click="isForm = false">x</div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useDocument from "@/composables/useDocument";
export default {
  props: ["playlist"],
  setup(props) {
    const title = ref("");
    const artist = ref("");
    const isForm = ref(false);
    const { updatePlaylist } = useDocument("playlists", props.playlist.id);
    const handleSubmit = async () => {
      const song = {
        title: title.value,
        artist: artist.value,
        id: Math.floor(Math.random() * 1000000),
      };
      await updatePlaylist({
        songs: [...props.playlist.songs, song],
      });
      title.value = "";
      artist.value = "";
      isForm.value = false;
    };
    return { title, artist, isForm, handleSubmit };
  },
};
</script>

<style scoped>
.add-song {
  text-align: center;
}
form {
  max-width: 100%;
  text-align: left;
  position: relative;
}
.close {
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 20px;
}
</style>