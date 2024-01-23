import { create } from "zustand";

// ----- Types
interface PresupuestoStore {
    presupuesto: number;
    disponible: number;
    gastado: number;
    setPresupuesto: (value: number) => void;
    setDisponible: () => void;
}







// ----- State

export const usePresupuestoStore = create<PresupuestoStore>((set) => ({
    presupuesto: 1000,
    gastado: 120,
    disponible: 0,
    setPresupuesto: (value) => set({ presupuesto:  value}),
    setDisponible: () => set((state) => ({disponible: state.presupuesto - state.gastado}))
}))