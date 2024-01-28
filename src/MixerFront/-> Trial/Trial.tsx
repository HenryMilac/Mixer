import { useLocalStoragePersistStore, useLocalStorageStore } from "./store/localStorage.store"

export default function Trial() {
  // Persist Store
  const textPersist = useLocalStoragePersistStore(state => state.textPersist)
  const setTextPersist = useLocalStoragePersistStore(state => state.setTextPersist)
  // No Persist Store
  const textNoPersist = useLocalStorageStore(state => state.textNoPersist)
  const setTextNoPersist = useLocalStorageStore(state => state.setTextNoPersist)


  return (
    <div>
      <p>Local Storage</p>
      <hr />

      <div className="flex">
        <input type="text" className="text-black"
          value={textPersist}
          onChange={e => setTextPersist(e.target.value)}
          />
        <p>Text Persist: {textPersist}</p>
      </div>
      <div className="flex">
        <input type="text" className="text-black"
          value={textNoPersist}
          onChange={e => setTextNoPersist(e.target.value)}
        />
        <p>Text No Persist: {textNoPersist}</p>
      </div>
    </div>
  )
}