<template>
  <div v-if="playlist" class="playlist-details">
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" alt="" />
      </div>
      <h1>{{ playlist.title }}</h1>
      <p class="description">{{ playlist.description }}</p>
      <p class="username">Created by: {{ playlist.userName }}</p>
      <p>Created at: {{ playlist.createdAt }}</p>
      <div v-if="ownership">
        <button v-if="!isPending" @click="handleDelete">Delete</button>
        <button v-else disabled>Processing</button>
      </div>
    </div>
    <div class="song-list">song-list here</div>
  </div>
  <div class="error">{{ error || documentError }}</div>
</template>

<script>
import { computed, ref } from "vue";
import getDocument from "@/composables/getDocument";
import useDocument from "@/composables/useDocument";
import getUser from "@/composables/getUser";
import useStorage from "@/composables/useStorage";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  setup(props) {
    const { deleteImage } = useStorage();
    const { error, document: playlist } = getDocument("playlists", props.id);
    const { user } = getUser();
    const router = useRouter();
    const isPending = ref(false);
    const { deletePlaylist, documentError } = useDocument(
      "playlists",
      props.id
    );
    const ownership = computed(() => {
      return (
        playlist.value && user.value && playlist.value.userId === user.value.uid
      );
    });
    const handleDelete = async () => {
      isPending.value = true;
      await deletePlaylist();
      await deleteImage(playlist.value.filePath);
      isPending.value = false;
      if (!documentError.value) router.push({ name: "Home" });
    };
    return {
      error,
      playlist,
      ownership,
      handleDelete,
      documentError,
      isPending,
    };
  },
};
</script>

<style>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 200%;
  max-height: 200%;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>