import { ref } from "@vue/reactivity"
import { firebaseProject } from '../firebase/config'

const addPost = () => {
  const err = ref(null)
  const load = async (data) => {
    try {
      const res = await firebaseProject.collection('posts').add(data)
      console.log(res)
      if (!res.id) {
        throw new Error('something went wrong')
      };
    } catch (e) {
      err.value = e.message;
      console.log(err.value)
    }
  };
  return { err, load }
}
export default addPost