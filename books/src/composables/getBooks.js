import { db, app } from '@/Firebase/config'
import { ref, watchEffect } from 'vue'
import { onSnapshot, collection, query } from 'firebase/firestore';


const getBooks = () => {
  const books = ref(null)
  const error = ref(null)
  const isPending = ref(false)
  isPending.value = true
  const booksCollection = query(collection(db, 'books'))
  const unsubscribe = onSnapshot(booksCollection, (snap) => {
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


export default getBooks