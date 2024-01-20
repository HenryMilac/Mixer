import { create } from "zustand";

interface PersonStore {
    name: string;
    age: number;
    plus: (value: number) => void;
    rest: (value: number) => void;
}

export const usePersonStore = create<PersonStore>((set) => (
    {
        name: 'Henry',
        age: 30,
        plus: (value) => set((state) => ({ age: state.age + value })),
        rest: (value) => set((state) => ({ age: state.age - value })),
    }
))