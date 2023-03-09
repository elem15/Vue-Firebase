import { projectFirestore } from '../Firebase/config'
import { ref, watchEffect } from 'vue'

const getDocument = (collection, id) => {
  const error = ref(null)
  const document = ref(null)

  const documentRef = projectFirestore.collection(collection).doc(id)
  const unsubscribe = documentRef.onSnapshot((doc) => {
    if (doc.data()) {
      document.value = { ...doc.data(), id: doc.id, createdAt: doc.data().createdAt.toDate() }
      error.value = null
    } else {
      error.value = 'document does not exist'
    }
  }, (e) => {
    console.log(e.message)
    error.value = 'could not fetch data'
    document.value = null
  })
  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsubscribe());
  });
  return { error, document }
}

export default getDocument