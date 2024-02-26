import { StateStorage, createJSONStorage } from "zustand/middleware"

const storageApi: StateStorage = {
    getItem: (name: string) => {
        const data = sessionStorage.getItem(name)
        return data
    },
    setItem: (name: string, value: string) => {
        sessionStorage.setItem(name, value)
    },
    removeItem: (name: string) => {
        console.log('removeItem', name)
    },
}

export const customSessionStorage = createJSONStorage(() => storageApi)