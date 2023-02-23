import { ref } from "@vue/reactivity"

const getPosts = () => {
  const posts = ref([])
  const err = ref(null)
  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 100)
      })
      const res = await fetch("http://localhost:3000/posts");
      if (!res.ok) {
        throw new Error("no data available");
      }
      const data = await res.json();
      posts.value = data;
    } catch (e) {
      err.value = e.message;
    }
  };
  return { posts, err, load }
}
export default getPosts