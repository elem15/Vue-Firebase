<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" />
    <label>Details</label>
    <textarea v-model="body" />
    <label>Tags (hit Enter to add)</label>
    <input @keypress.enter.prevent="handleKey" type="text" v-model="tag" />
    <div v-for="tag in tags" :key="tag" class="pill">{{ tag }}</div>
    <button>Submit</button>
  </form>
  <div class="error" v-if="err">{{ err }}</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import addPost from "../compositions/addPost";
import { useRouter } from "vue-router";
// import router from "@/router";
export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const handleKey = () => {
      tag.value = tag.value.replace(/\s/g, "");
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const { err, load } = addPost();
    const handleSubmit = async () => {
      const data = { title: title.value, body: body.value, tags: tags.value };
      await load(data);
      if (!err.value) {
        router.push({ name: "Home" });
      }
    };
    const handle = () => {};
    return { title, body, tag, tags, handleKey, handleSubmit, handle, err };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
.error {
  color: red;
}
</style>