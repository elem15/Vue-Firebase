import { db } from '@/Firebase/config'
import { addDoc, collection, } from 'firebase/firestore'
import { ref } from 'vue'

const useCollection = (c) => {
  const error = ref(null)
  const isPending = ref(false)
  const documents = ref(null)
  const createDoc = async (document) => {
    const colRef = collection(db, c)
    isPending.value = true
    try {
      await addDoc(colRef, document)
      isPending.value = false
    } catch (e) {
      error.value = "can't add document"
      console.log(e.value)
      isPending.value = false
    }
  }
  return { error, isPending, documents, createDoc }
}
export default useCollection