import { create } from "zustand"

interface Persons {
    fullName: string
    setFullName: (value: string) => void
}


export const usePersonsStore = create<Persons>(set => ({
    fullName: '',
    setFullName: (value: string) => set({fullName: value}),
}))