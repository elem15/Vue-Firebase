import { ref } from "@vue/reactivity"
import { firebaseProject } from '../firebase/config'

const getPost = (id) => {
  const post = ref(null)
  const err = ref(null)
  const load = async () => {
    try {
      const res = await firebaseProject.collection('posts').doc(id).get()
      if (!res.exists) {
        throw new Error('no data available ')
      }
      post.value = { ...res.data(), id }
    } catch (e) {
      err.value = e.message;
      console.log(err.value)
    }
  };
  return { post, err, load }
}
export default getPost