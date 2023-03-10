import { db } from '@/Firebase/config'
import { ref, watchEffect } from 'vue'
import { onSnapshot, collection, query, where } from 'firebase/firestore';


const getCollection = (c, q) => {
  const books = ref(null)
  const error = ref(null)
  const isPending = ref(false)
  isPending.value = true
  let docsRef = collection(db, c)
  if (q) {
    docsRef = query(docsRef, where(...q))
  }
  const unsubscribe = onSnapshot(docsRef, (snap) => {
    const results = []
    snap.docs.forEach(doc => { results.push({ ...doc.data(), id: doc.id }) })
    books.value = results
    error.value = null
    isPending.value = false
  }, (e) => {
    books.value = null
    error.value = "can't fetch data"
    console.log(e.message)
    isPending.value = false
  })
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe())
  })
  return { error, isPending, books }
}


export default getCollection