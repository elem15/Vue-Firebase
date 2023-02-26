import { ref } from 'vue';
import { auth } from '../Firebase/config'
const err = ref(null)

const login = async (email, password) => {
  err.value = null
  try {
    const res = await auth.signInWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Incorrect login credentials')
    }
    err.value = null
    return res.user
  } catch (e) {
    err.value = e.message
    console.log(err.value)
  }
}

const useLogin = () => {
  return { err, login }
}

export default useLogin