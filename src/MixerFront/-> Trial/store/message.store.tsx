import { create } from "zustand";

interface MessageStore {
    message: string;
    setMessage: (value: string) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
    message: '',
    setMessage: (value) => set({message: value})
}))