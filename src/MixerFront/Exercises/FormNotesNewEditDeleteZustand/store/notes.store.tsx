import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./storage/session.storage";

interface NotesStore {
    notes: Note[];
    note: string;
    category: string;
    setNote: (noteValue: string) => void;
    setCategory: (categoryValue: string) => void;
    handleSubmit: (e: any) => void
}
interface Note {
    id: number;
    note: string;
    category: string;
}

const storeAPI: StateCreator<NotesStore> = set => ({
    notes: [],
    note: '',
    category: '',
    setNote: (noteValue) => set({note: noteValue}),
    setCategory: (noteValue) => set({category: noteValue}),
    handleSubmit: (e) => {
        e.preventDefault()
        const noteObject = {
            id: Date.now(),
            note: (e.target[0].value),
            category: (e.target[1].value)
        }
        set(state => ({notes: [...state.notes, noteObject]}))
        set({note: ''})
        set({category: ''})
    },
})

export const useNotesStore = create<NotesStore>()(
    persist(storeAPI, {
        name: 'renderingStore-store',
        storage: customSessionStorage
    })
)