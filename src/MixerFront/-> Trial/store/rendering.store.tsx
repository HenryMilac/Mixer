import { create } from "zustand";

interface RenderingStore {
    text: string;
    setText: (valueText: string) => void;
}

export const useRenderingStore = create<RenderingStore>((set) => ({
    text: '',
    setText: (valueText) => set({text: valueText})
}))