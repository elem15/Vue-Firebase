import { auth } from '@/Firebase/config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const error = ref(null)
const isPending = ref(false)
const user = ref(auth.currentUser)
const signup = async (userData) => {
  const { email, password } = userData
  isPending.value = true
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    isPending.value = false
    error.value = null
  } catch (e) {
    isPending.value = false
    error.value = e.message
    console.log(error.value)
  }
}
const login = async (userData) => {
  const { email, password } = userData
  isPending.value = true
  try {
    await signInWithEmailAndPassword(auth, email, password);
    isPending.value = false
    error.value = null
  } catch (e) {
    isPending.value = false
    error.value = e.message
    console.log(error.value)
  }
}
onAuthStateChanged(auth, (activeUser) => {
  if (activeUser) {
    user.value = activeUser
  } else {
    user.value = null
  }
})
export { error, isPending, user, signup, login }