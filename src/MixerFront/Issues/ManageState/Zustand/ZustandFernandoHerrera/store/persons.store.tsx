import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./storages/session.storage";


// ----- Types
interface Persons {
    fullName: string
    setFullName: (value: string) => void
}





// ----- StateCreator
const storeAPI: StateCreator<Persons> = (set) => ({
    fullName: '',
    setFullName: (value: string) => set({fullName: value}),
})
// ----- Store
export const usePersonsStore = create<Persons>()(
    persist(storeAPI, {
        name: 'persons-store',
        storage: customSessionStorage,
    })
)