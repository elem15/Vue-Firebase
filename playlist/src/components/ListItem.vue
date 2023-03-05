<template>
  <router-link :to="{ name: 'PlaylistDetails', params: { id: doc.id } }">
    <div class="single">
      <div class="thumbnail">
        <img :src="doc.coverUrl" alt="" />
      </div>
      <div class="info">
        <h4>
          {{ doc.title }}
        </h4>
        <p>Created by: {{ doc.userName }}</p>
      </div>
      <div class="song-number">
        <p>{{ doc.songs.length }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["doc"],
};
</script>

<style scoped>
img {
  max-width: 150%;
  max-height: 150%;
  height: 40px;
  width: 40px;
  display: block;
}
.single {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  margin: 16px 0;
  transition: all ease 0.2s;
}

.single:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.3s;
}
.thumbnail {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 10px;
}
.song-number {
  margin-left: auto;
}
.info {
  margin: 0 30px;
}
</style>