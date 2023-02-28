import { app } from '../Firebase/config'
import { ref } from 'vue'

const useCollection = (collection) => {
  const error = ref(null)
  const addDoc = async (message) => {
    try {
      await app.collection(collection).add(message)
      error.value = null
    } catch (e) {
      error.value = e.message
      console.log(error)
    }
  }
  return { error, addDoc }
}
export default useCollection