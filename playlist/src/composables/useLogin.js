import { ref } from 'vue';
import { projectAuth } from '../Firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
  error.value = null
  isPending.value = true
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    isPending.value = false
    if (!res) {
      throw new Error('Incorrect login credentials')
    }
    error.value = null
    return res.user
  } catch (e) {
    error.value = e.message
    isPending.value = false
    console.log(error.value)
  }
}

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin