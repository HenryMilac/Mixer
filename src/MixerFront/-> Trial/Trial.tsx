import { useNoPersistStore, usePersistStore } from "./store/persist.store"

export default function Trial() {

  const textPersist = usePersistStore(state => state.textPersist)
  const setTextPersist = usePersistStore(state => state.setPersist)
  const textNoPersist = useNoPersistStore(state => state.textNoPersist)
  const setTextNoPersist = useNoPersistStore(state => state.setNoPersist)

  return (
    <div>
      <div className="flex">
        <input type="text" className="text-black" 
          value={textPersist}
          onChange={e => setTextPersist(e.target.value)}
          />
        <p>Dato Persistente: {textPersist}</p>
      </div>

      <hr />
      <div className="flex">
        <input type="text" className="text-black" 
          value={textNoPersist}
          onChange={e => setTextNoPersist(e.target.value)}
        />
        <p>Dato No Persistente: {textNoPersist}</p>
      </div>
    </div>
  )
}