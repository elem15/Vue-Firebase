import { ref } from 'vue';
import { projectAuth } from '../Firebase/config'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    await res.user.updateProfile({ displayName })
    isPending.value = false
    error.value = null
  } catch (e) {
    error.value = e.message
    isPending.value = false
    console.log(error.value)
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup