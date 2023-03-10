import { db } from '@/Firebase/config'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore/lite';


const books = ref(null)
const error = ref(null)
const isPending = ref(false)
const getBooks = async () => {
  const booksCollection = collection(db, 'books')
  isPending.value = true
  try {
    const booksSnapshot = await getDocs(booksCollection)
    books.value = booksSnapshot.docs.map(doc => doc.data())
    error.value = null
    isPending.value = false
  } catch (e) {
    books.value = null
    error.value = "can't fetch data"
    console.log(e.message)
    isPending.value = false
  }
}
getBooks()
export { error, books, isPending }