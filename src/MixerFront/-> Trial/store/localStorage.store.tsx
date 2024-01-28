import { create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./storages/session.storage";

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

export const useLocalStoragePersistStore = create<LocalStoragePersistStore>()(
    persist((set) => 
        ({
            textPersist: "",
            setTextPersist: (textValue) => set({textPersist: textValue})
        }), 
        {
            name: "localStoragePersist",
            storage: customSessionStorage
        }
    )
)
