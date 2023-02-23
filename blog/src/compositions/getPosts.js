import { ref } from "@vue/reactivity"
import { firebaseProject } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const err = ref(null)
  const load = async () => {
    try {
      await firebaseProject.collection('posts').orderBy('createdAt', 'desc').onSnapshot(snap => {
        posts.value = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      })
      // if (res.empty) {
      //   throw new Error('no data available ')
      // }
      // posts.value = res.docs.map(doc => ({
      //   ...doc.data(), id: doc.id
      // }))
      // .sort((post1, post2) => post1.createdAt - post2.createdAt)
    } catch (e) {
      if (!e.message) {
        err.value = "something went wrong";
        console.log("something went wrong");
      }
      err.value = e.message;
      console.log(err.value)
    }
  };
  return { posts, err, load }
}
export default getPosts