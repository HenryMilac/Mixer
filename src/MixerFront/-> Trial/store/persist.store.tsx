import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./storages/session.storage";



interface PersistStore {
    textPersist: string
    setPersist: (value: string) => void
}
interface NoPersistStore {
    textNoPersist: string
    setNoPersist: (value: string) => void
}





export const useNoPersistStore = create<NoPersistStore>((set) => ({
    textNoPersist: '',
    setNoPersist: (value) => set(() => ({textNoPersist: value}))
}))


const storeAPI: StateCreator<PersistStore> = set => ({
    textPersist: '',
    setPersist: (value) => set(() => ({textPersist: value}))
})

export const usePersistStore = create<PersistStore>()(
    persist(storeAPI, {
        name: 'persist-store',
        storage: customSessionStorage
    })
)