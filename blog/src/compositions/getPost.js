import { ref } from "@vue/reactivity"

const getPost = (id) => {
  const post = ref(null)
  const err = ref(null)
  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
      const res = await fetch("http://localhost:3000/projects/" + id);
      if (!res.ok) {
        throw new Error("no data available");
      }
      const data = await res.json();
      post.value = data;
    } catch (e) {
      err.value = e.message;
      console.log(err.value)
    }
  };
  return { post, err, load }
}
export default getPost