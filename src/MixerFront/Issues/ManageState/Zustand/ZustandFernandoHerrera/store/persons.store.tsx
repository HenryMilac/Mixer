import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./storages/session.storage";



interface PersonsState {
    firstName: string
    lastName: string
}
interface PersonsActions {
    setFirstName: (value: string) => void
    setLastName: (value: string) => void
}





const storeAPI: StateCreator<PersonsState & PersonsActions> = (set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (value: string) => set({firstName: value}),
    setLastName: (value: string) => set({lastName: value}),
})
export const usePersonsStore = create<PersonsState & PersonsActions>()(
    persist(storeAPI, {
        name: 'persons-store',
        storage: customSessionStorage,
    })
)