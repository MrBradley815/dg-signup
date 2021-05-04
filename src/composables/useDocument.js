import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
  const error = ref(null)
  const isPending = ref(false)

  let docRef = projectFirestore.collection(collection).doc(id)

  const updateDoc = async (updates) => {
    isPending.value = true
    error.value = null
    try {
      const res = await docRef.update(updates)
      isPending.value = false
      return res
    } catch(err) {
      isPending.value = false
      error.value = err.message
    }
  }

  return { error, isPending, updateDoc }
}

export default useDocument