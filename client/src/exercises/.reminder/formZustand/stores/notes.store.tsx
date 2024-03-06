import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface NotesStore {
    notes: [],
    setNotes: (value: []) => void
    note: {}
    setNote: (value: {}) => void
    noteInput: string
    setNoteInput: (value: string) => void
    tagInput: string
    setTagInput: (value: string) => void

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleEdit: (note: any) => void
    handleDelete: (id: number) => void
}

export const useNotesStore = create<NotesStore>()(devtools(persist((set, get) => 
    ({
        notes: [],
        setNotes: (value) => set({notes: value}),
        note: {},
        setNote: (value) => set({note: value}),
        noteInput: '',
        setNoteInput: (value) => set({noteInput: value}),
        tagInput: '',
        setTagInput: (value) => set({tagInput: value}),

        handleSubmit: (e) => {
            e.preventDefault()
            const newNote = {
                id: Date.now(),
                noteInput: get().noteInput,
                tagInput: get().tagInput
            }
            if(get().note.id){
                console.log('si id')
            }
            else{
                console.log('no id')
            }
            get().setNotes([...get().notes, newNote])
            get().setNote({})
            get().setNoteInput('')
            get().setTagInput('')
        },
        handleEdit: (note) => {
            get().setNote(note)
            get().setNoteInput(note.noteInput)
            get().setTagInput(note.tagInput)
            console.log(get().note)
        },
        handleDelete: (id) => {
            const newNotes = get().notes.filter((note: any) => note.id !== id)
            get().setNotes(newNotes as [])
        }
    }),
    {
        name: 'notes-store',
        getStorage: () => localStorage
    }
)))