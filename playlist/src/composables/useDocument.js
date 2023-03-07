import { projectFirestore } from "@/Firebase/config";
import { ref } from 'vue';

const useDocument = (collection, id) => {
  const documentError = ref(null)
  const isPending = ref(false)
  const error = ref('')
  const refDoc = projectFirestore.collection(collection).doc(id)
  const deletePlaylist = async () => {
    isPending.value = true
    try {
      await refDoc.delete();
      isPending.value = false
    } catch (e) {
      isPending.value = false
      documentError.value = "couldn't delete the playlist";
      console.log(e.message);
    }
  };
  const updatePlaylist = async (song) => {
    isPending.value = true
    try {
      const doc = await refDoc.get()
      const data = doc.data()
      const { songs } = data
      songs.push(song)
      console.log(songs)
      await refDoc.update({
        ...data, songs
      })
      isPending.value = false
      error.value = null
    } catch (e) {
      error.value = e.message
      isPending.value = false
      console.log(error.value)
    }
  }
  return { deletePlaylist, documentError, updatePlaylist, isPending, error }
}

export default useDocument