import { projectFirestore } from '../Firebase/config'
import { ref } from 'vue'

const useCollection = (collection) => {
  const error = ref(null)
  const isPending = ref(false)

  const addDoc = async (message) => {
    isPending.value = true
    try {
      const res = await projectFirestore.collection(collection).add(message)
      isPending.value = false
      error.value = null
      return res;
    } catch (e) {
      error.value = e.message
      isPending.value = false
      console.log(error)
    }
  }
  return { error, addDoc, isPending }
}
export default useCollection