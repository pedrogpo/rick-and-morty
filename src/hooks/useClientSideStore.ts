import { useEffect, useState } from 'react'

/**
 * useClientSideStore - A custom React hook to handle client-side store hydration.
 *
 * This hook is designed to address the hydration issue, delaying the store update
 * until after the useEffect hook has run. This ensures the store is treated correctly
 * during the hydration process.
 *
 * @template T - The type of the store.
 * @param {T} store - The initial store value.
 * @returns {T | null} - The locally stored value of type T or null if the state has not been set yet.
 *
 * @example
 * import useClientSideStore from './useClientSideStore';
 *
 * function App() {
 *   const localStore = useClientSideStore(store);
 *
 *   // Use localStore in your component
 * }
 */
export default function useClientSideStore<T>(store: T): T | null {
  const [localStore, setLocalStore] = useState<T | null>(null)

  useEffect(() => {
    setLocalStore(store)
  }, [])

  return localStore
}
