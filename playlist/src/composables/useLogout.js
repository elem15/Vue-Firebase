import { projectAuth } from '../Firebase/config';
import { ref } from 'vue';

const error = ref(null)
const isPending = ref(false)
const logout = async () => {
  error.value = null
  isPending.value = true
  try {
    await projectAuth.signOut()
    error.value = null
    isPending.value = false
  } catch (e) {
    error.value = e.message
    isPending.value = false
    console.log(error.value)
  }
}

export default function () {
  return { error, logout, isPending }
}