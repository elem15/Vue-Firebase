import { projectFirestore } from "@/Firebase/config";
import { ref } from 'vue';

const useDocument = (collection, id) => {
  const documentError = ref(null)
  const isPending = ref(false)
  const refDoc = projectFirestore.collection(collection).doc(id)
  const deletePlaylist = async () => {
    try {
      isPending.value = true
      await refDoc.delete();
      isPending.value = false
    } catch (e) {
      isPending.value = false
      documentError.value = "couldn't delete the playlist";
      console.log(e.message);
    }
  };
  return { deletePlaylist, documentError }
}

export default useDocument