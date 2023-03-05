import { projectStorage } from '@/Firebase/config'
import { ref } from 'vue'
import getUser from './getUser'

const useStorage = () => {
  const storageError = ref('')
  const filePath = ref('')
  const url = ref(null)
  const { user } = getUser()
  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`
    const storageRef = projectStorage.ref(filePath.value)
    try {
      const res = await storageRef.put(file)
      url.value = await res.ref.getDownloadURL()
      error.value = ''
    } catch (e) {
      storageError.value = e.message === 'error is not defined' ? '' : e.message
      console.log(storageError.value)
    }
  }
  return { storageError, filePath, url, uploadImage }
}

export default useStorage