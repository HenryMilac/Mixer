import { create } from "zustand";

interface RenderingStore {
    note: string;
    setNote: (textValue: string) => void;
}

export const useRenderingStore = create<RenderingStore>((set) => ({
    note: '',
    setNote: (textValue) => set({note: textValue})
}))