import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./storage/session.storage";

interface NotesStore {
    notes: Note[];
    note: {}
    noteInput: string;
    categoryInput: string;
    setNote: ({}) => void;
    setNoteInput: (noteValue: string) => void;
    setCategoryInput: (categoryValue: string) => void;
    handleSubmit: (e: any) => void
    handleDelete: (id: number) => void
}
interface Note {
    id: number;
    noteInput: string;
    categoryInput: string;
}

const storeAPI: StateCreator<NotesStore> = set => ({
    notes: [],
    note: {},
    noteInput: '',
    categoryInput: '',
    setNote: (noteObject) => set({note: noteObject}),
    setNoteInput: (noteValue) => set({noteInput: noteValue}),
    setCategoryInput: (noteValue) => set({categoryInput: noteValue}),
    handleSubmit: (e) => {
        e.preventDefault()
        const noteObject = {
            id: Date.now(),
            noteInput: (e.target[0].value),
            categoryInput: (e.target[1].value)
        }
        set(state => ({notes: [...state.notes, noteObject]}))
        
        set({noteInput: ''})
        set({categoryInput: ''})
    },
    handleDelete: (id) => {
        set(state => ({
            notes: state.notes.filter(note => note.id !== id)
    }))
    }
})

export const useNotesStore = create<NotesStore>()(
    persist(storeAPI, {
        name: 'renderingStore-store',
        storage: customSessionStorage
    })
)