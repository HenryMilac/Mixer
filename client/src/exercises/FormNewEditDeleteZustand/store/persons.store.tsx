import React from "react";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PersonsStore {
    persons: Person[];
    person: Partial<Person>;
    name: string;
    lastName: string;
    setPerson: (value: Person) => void;
    setName: (value: string) => void;
    setLastName: (value: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleDelete: (value: number) => void;
}

interface Person {
    id: number;
    name: string;
    lastName: string;
}

const storeAPI: StateCreator<PersonsStore> = (set, get) => ({
    persons: [],
    person: {},
    setPerson: (value: Partial<Person>) => set({ person: value }),
    name: '',
    setName: (value: string) => set({ name: value }),
    lastName: '',
    setLastName: (value: string) => set({ lastName: value }),

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newPerson = {
            id: get().person.id || Date.now(),
            name: get().name,
            lastName: get().lastName
        };

        if (get().person.id){
            const personEditing = get().persons.map(personEdit => {
                if (personEdit.id === get().person.id) {
                    return newPerson;
                }
                return personEdit;
            });
            set({ persons: personEditing });
        } else {
            set({ persons: [...get().persons, newPerson] });
        }

        set({ name: '' });
        set({ lastName: '' });
        set({ person: {} });
    },
    handleDelete: (value: number) => {
        set(state => ({
            persons: state.persons.filter(personDelete => personDelete.id !== value)
        }))
    }
})

// ------------------------------ State Persist
export const usePersonsStore = create<PersonsStore>()(
    devtools(persist(storeAPI, {
        name: 'renderingStore-store',
    }))
)