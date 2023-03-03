<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="title" v-model="title" />
    <textarea placeholder="description" v-model="description"></textarea>
    <label>Add playlist cover</label>
    <input type="file" @change="fileChange" />
    <div class="error">{{ fileError }}</div>
    <button>Send playlist</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");
const description = ref("");
const imageFile = ref(null);
const fileError = ref("");
const types = ["image/jpeg", "image/png"];
const handleSubmit = () => {
  if (imageFile.value) {
    console.log(title.value, description.value, imageFile.value);
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