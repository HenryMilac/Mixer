import { create } from "zustand";

interface NotesState {
    notes: Note[]
}
interface Note {
    id: number,
    note: string,
    category: string
}
interface NotesActions {
    
}

export const useNotesStore = create<NotesState & NotesActions>()(() => ({
    notes: [
        {id: 1, note: 'This is a note on proving', category: 'Cat'},
        {id: 2, note: 'This is a note on proving, this a note', category: 'Cat2'}
    ]
}))