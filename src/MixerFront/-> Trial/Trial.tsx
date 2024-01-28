import { useLocalStorageStore } from "./store/localStorage"

export default function Trial() {

  const textPersist = useLocalStorageStore(state => state.textPersist)
  const setTextPersist = useLocalStorageStore(state => state.setTextPersist)
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