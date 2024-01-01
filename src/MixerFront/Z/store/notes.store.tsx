import { create } from "zustand";

interface NoteState {
    notes: Note[],
}
interface Note {
    id: number,
    note: string
}
interface NoteActions {
}

export const useNotesStore = create<NoteState & NoteActions>()(() => ({
    notes: [
        {id: 1, note: 'Note 1'},
        {id: 2, note: 'Note 2'},
    ],
}));