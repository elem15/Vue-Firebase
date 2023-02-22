import { ref } from "@vue/reactivity"

const addPost = () => {
  const err = ref(null)
  const load = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/project/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        throw new Error("no data available");
      }
    } catch (e) {
      err.value = e.message;
      console.log(err.value)
    }
  };
  return { err, load }
}
export default addPost