import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./storages/sessionStore";


interface RenderingStore {
    text: string,
    setText: (textValue: string) => void
}


const storeAPI: StateCreator<RenderingStore> = set => ({
    text: '',
    setText: (textValue) => set({text: textValue})
})

export const useRenderingStore = create<RenderingStore>()(
    persist(storeAPI, {
        name: 'renderingStore-store',
        storage: customSessionStorage
    })
)