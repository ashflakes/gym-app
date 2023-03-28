import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(snapshot => {
      if (snapshot.data()) {
        setDocument({...snapshot.data(), id: snapshot.id})
        setError(null)
      }
      else {
        setError('no document with this id')
      }
      
    }, (err) => {
      console.log(err.message)
      setError('failed to get documents')
    })

    return () => unsubscribe()
  }, [collection, id])

  return { document, error }
}