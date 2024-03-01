import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NotesStorePersist {
    notes: Note[];
    note: Note;
    noteInput: string;
    categoryInput: string;
    setNote: (noteObject: Note) => void;
    setNoteInput: (noteValue: string) => void;
    setCategoryInput: (categoryValue: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleDelete: (id: number) => void;
}

interface Note {
    id: number;
    noteInput: string;
    categoryInput: string;
}

const storeAPI: StateCreator<NotesStorePersist> = (set, get) => ({
    notes: [] as Note[],
    note: {} as Note,
    setNote: (noteObject: Note) => set({ note: noteObject }),
    noteInput: '',
    setNoteInput: (noteValue: string) => set({ noteInput: noteValue }),
    categoryInput: '',
    setCategoryInput: (noteValue: string) => set({ categoryInput: noteValue }),

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const noteObject = {
            noteInput: get().noteInput,
            categoryInput: get().categoryInput
        };

        if (get().note.id) {
            const updatedNotes = get().notes.map(note => {
                if (note.id === get().note.id) {
                    return {
                        ...note,
                        noteInput: noteObject.noteInput,
                        categoryInput: noteObject.categoryInput
                    };
                }
                return note;
            });

            set({ notes: updatedNotes });
        } else {
            noteObject.id = Date.now();
            set({ notes: [...get().notes, noteObject] });
        }

        set({ noteInput: '' });
        set({ categoryInput: '' });
        set({ note: {} });
    },
    handleDelete: (id: number) => {
        set(state => ({
            notes: state.notes.filter(note => note.id !== id)
        }))
    }
})

// ------------------------------ State Persist
export const useNotesStorePersist = create<NotesStorePersist>()(
    devtools(persist(storeAPI, {
        name: 'renderingStore-store',
    }))
)

// ------------------------------ State No Persist
export const useNotesStoreNoPersist = create(() => ({}))
