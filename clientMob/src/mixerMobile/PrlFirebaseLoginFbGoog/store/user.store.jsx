import { create } from "zustand";


export const useUserStore = create((set, get) => ({
    user_names: '',
    user_email: '',
    user_password: '',
    setUser_names: (value) => set({user_names: value}),
    setUser_email: (value) => set({user_email: value}),
    setUser_password: (value) => set({user_password: value}),
}))