<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="title" v-model="title" />
    <textarea placeholder="description" v-model="description"></textarea>
    <label>Add playlist cover</label>
    <input type="file" @change="fileChange" />
    <button v-if="isPending" disabled>Saving</button>
    <button v-else>Send</button>
    <div class="error">{{ fileError || storageError || error }}</div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/Firebase/config";

const title = ref("");
const description = ref("");
const imageFile = ref(null);
const fileError = ref("");
const isPending = ref(false);
const types = ["image/jpeg", "image/png"];

const { storageError, filePath, url, uploadImage } = useStorage();
const { error, addDoc } = useCollection("playlists");
const { user } = getUser();

const handleSubmit = async () => {
  if (imageFile.value) {
    isPending.value = true;
    await uploadImage(imageFile.value);
    await addDoc({
      title: title.value,
      description: description.value,
      userId: user.value.uid,
      userName: user.value.displayName,
      coverUrl: url.value,
      filePath: filePath.value,
      songs: [],
      createdAt: timestamp(),
    });
    isPending.value = false;
  } else {
    fileError.value = "You need add a playlist cover";
  }
};
const fileChange = (e) => {
  const file = e.target.files[0];
  if (file && types.includes(file.type)) {
    imageFile.value = file;
    fileError.value = "";
  } else {
    imageFile.value = null;
    fileError.value = "Please select an image file (jpeg or png)";
  }
};
</script>

<style scope>
input[type="file"] {
  border: 0;
  outline: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin: 30px;
}
button {
  margin-top: 20px;
}
</style>