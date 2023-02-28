import { app } from '../Firebase/config'
import { ref } from 'vue'

const useCollection = (collection) => {
  const error = ref(null)
  const addDoc = async (message) => {
    try {
      app.collection(collection).add(message)
      error.value = null
    } catch (e) {
      error.value = e.message
      console.log(error.value)
    }
  }
  return { error, addDoc }
}
export default useCollection