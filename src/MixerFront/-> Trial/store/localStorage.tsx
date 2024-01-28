import { create } from "zustand";

interface LocalStorageStore {
    textNoPersist: string;
    setTextNoPersist: (text: string) => void;
}
interface LocalStoragePersistStore {
    textPersist: string;
    setTextPersist: (text: string) => void;
}


// ----- Stores (Persist & No persist)
export const useLocalStorageStore = create<LocalStorageStore>((set) => ({
    textNoPersist: "",
    setTextNoPersist: (textValue) => set({textNoPersist: textValue})
}))

export const useLocalStoragePersistStore = create<LocalStoragePersistStore>((set) => ({
    textPersist: "",
    setTextPersist: (textValue) => set({textPersist: textValue}),
}))