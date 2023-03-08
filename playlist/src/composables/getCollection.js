import { projectFirestore } from '../Firebase/config'
import { ref, watchEffect } from 'vue'

const getCollection = (collection, query = null) => {
  const error = ref(null)
  const documents = ref(null)
  let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')
  if (query) {
    collectionRef = collectionRef.where(...query)
  }
  const unsubscribe = collectionRef.onSnapshot((snap) => {
    const docs = []
    snap.docs.forEach(doc => {
      doc.data().createdAt && docs.push({ ...doc.data(), id: doc.id })
    })
    documents.value = docs
    error.value = null
  }, (e) => {
    console.log(e.message)
    error.value = 'could not fetch data'
    documents.value = null
  })
  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsubscribe());
  });
  return { error, documents }
}

export default getCollection