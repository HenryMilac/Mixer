import { create } from "zustand";

interface LocalStorageStore {
    textPersist: string;
    textNoPersist: string;
    setTextPersist: (text: string) => void;
    setTextNoPersist: (text: string) => void;
}

export const useLocalStorageStore = create<LocalStorageStore>((set) => ({
    textPersist: "",
    textNoPersist: "",
    setTextPersist: (textValue) => set({textPersist: textValue}),
    setTextNoPersist: (textValue) => set({textNoPersist: textValue})
}))