import { create } from "zustand";

interface PersonStore {
    name: string;
    age: number;
    plusAge: (value: number) => void;
    restAge: (value: number) => void;
}

export const usePersonStore = create<PersonStore>((set) => ({
    name: 'John Doe',
    age: 20,
    plusAge: (value) => set(state => ({ age: state.age + value})),
    restAge: (value) => set(state => ({ age: state.age - value})),
}))