import { create } from "zustand";

export const usePersonsStore = create((set) => ({
    name: 'Henry',
    age: 22,
    plus: () => set(state => ({ age: state.age + 1 })),
    rest: () => set(state => ({ age: state.age - 1 }))
}))