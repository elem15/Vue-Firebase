import { app } from '@/Firebase/config'
import { ref } from 'vue'

const getCollection = (collection) => {
  const error = ref(null)
  const documents = ref([])

  const collectionRef = app.collection(collection).orderBy('createdAt')
  collectionRef.onSnapshot((snap) => {
    const docs = []
    snap.docs.forEach(doc => {
      doc.data().createdAt && docs.push({ ...doc.data(), id: doc.id })
    })
    documents.value = docs
    error.value = null
  }, (e) => {
    console.log(e.message)
    error.value = 'could not fetch data'
    documents.value = []
  })
  return { error, documents }
}

export default getCollection