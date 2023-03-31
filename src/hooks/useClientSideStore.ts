import { useEffect, useState } from 'react'

export default function useClientSideStore<T>(store: T): T | null {
  const [localStore, setLocalStore] = useState<T | null>(null)

  useEffect(() => {
    setLocalStore(store)
  }, [])

  return localStore
}
