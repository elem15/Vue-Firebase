import { app } from '../Firebase/config'
import { ref, watchEffect } from 'vue'

const getCollection = (collection) => {
  const error = ref(null)
  const documents = ref([])

  const collectionRef = app.collection(collection).orderBy('createdAt')
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
    console.log(error.value)
    documents.value = []
  })
  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsubscribe());
  });
  return { error, documents }
}

export default getCollection