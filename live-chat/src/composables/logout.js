import { auth } from '@/Firebase/config';
import { ref } from 'vue';

const err = ref(null)

const logout = async () => {
  err.value = null
  try {
    await auth.signOut()
    err.value = null
  } catch (e) {
    err.value = e.message
    console.log(err.value)
  }
}

export default function () {
  return { err, logout }
}