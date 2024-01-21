import { create } from "zustand";

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

export const useNotesStore = create<NotesStore>((set) => ({
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
}))