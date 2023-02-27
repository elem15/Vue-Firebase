import { ref } from 'vue';
import { auth } from '../Firebase/config'
const err = ref(null)

const signup = async (email, password, displayName) => {
  err.value = null
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    await res.user.updateProfile({ displayName })
    console.log(res.user)
    err.value = null
  } catch (e) {
    err.value = e.message
    console.log(err.value)
  }
}

const useSignup = () => {
  return { err, signup }
}

export default useSignup