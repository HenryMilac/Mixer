import { create } from "zustand";

interface PersonStore {
    name: string;
    age: number;
    plusAge: () => void;
    restAge: () => void;    
}

export const usePersonStore = create<PersonStore>((set) => ({
    name: 'Henry',
    age: 31,
    plusAge: () => set(state => ({age: state.age + 1})),
    restAge: () => set(state => ({age: state.age - 1})),
}))