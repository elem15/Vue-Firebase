import { db } from '@/Firebase/config'
import { addDoc, collection, deleteDoc, doc, updateDoc, } from 'firebase/firestore'
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
  const removeDoc = async (id) => {
    const docRef = doc(db, c, id)
    try {
      isPending.value = true
      await deleteDoc(docRef)
      isPending.value = false
    } catch (e) {
      error.value = "can't add document"
      console.log(e.value)
      isPending.value = false
    }
  }
  const changeDoc = async (id, field) => {
    const docRef = doc(db, c, id)
    try {
      isPending.value = true
      await updateDoc(docRef, field)
      isPending.value = false
    } catch (e) {
      error.value = "can't add document"
      console.log(e.value)
      isPending.value = false
    }
  }
  return { error, isPending, documents, createDoc, removeDoc, changeDoc }
}
export default useCollection