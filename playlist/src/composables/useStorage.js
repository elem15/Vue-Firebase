import { projectStorage, projectFirestore } from '@/Firebase/config'
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
    //if file name exist - don't rewriting and return old url
    try {
      url.value = await storageRef.getDownloadURL()
      console.log(url.value)
    } catch (err) {
      try {
        const res = await storageRef.put(file)
        url.value = await res.ref.getDownloadURL()
        storageError.value = ''
      } catch (e) {
        storageError.value = e.message === 'error is not defined' ? '' : e.message
        console.log(storageError.value)
      }
    }
  }
  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path)
    const collectionRef = projectFirestore.collection('playlists').where('filePath', '==', path)
    try {
      const data = [];
      (await collectionRef.get()).docs.forEach(doc => data.push(doc))
      if (data.length) {
        throw new Error('Other documents with this image exist')
      }
      await storageRef.delete()
      error.value = ''
    } catch (e) {
      storageError.value = e.message === 'error is not defined' ? '' : e.message
      console.log(storageError.value)
    }
  }
  return { storageError, filePath, url, uploadImage, deleteImage }
}

export default useStorage