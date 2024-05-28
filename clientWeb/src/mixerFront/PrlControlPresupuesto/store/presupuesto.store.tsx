import { create } from "zustand";

// ----- Types
interface PresupuestoStore {
    presupuesto: number;
    setPresupuesto: (value: number) => void;
    gastado: number;
    disponible: number;
    setDisponible: () => void;
    productInput: string;
    setProductInput: (value: string) => void;
    priceInput: number;
    setPriceInput: (value: number) => void;
    // categoryInput: string;
    // setCategoryInput: () => void;
    handleSpend: (e: React.FormEvent<HTMLFormElement>, state: PresupuestoStore) => void;
    // spends: []
    // spend: {}
}






// ----- State
export const usePresupuestoStore = create<PresupuestoStore>((set) => ({
    presupuesto: 1000,
    setPresupuesto: (value) => set({ presupuesto:  value}),
    gastado: 120,
    disponible: 0,
    setDisponible: () => set((state) => ({disponible: state.presupuesto - state.gastado})),
    productInput: "",
    setProductInput: (value) => set({productInput: value}),
    priceInput: 0,
    setPriceInput: (value) => set({priceInput: value}),
    // categoryInput: "",
    // setCategoryInput: (value) => set({categoryInput: value}),
    handleSpend: (e) => {
        e.preventDefault()
        const productObject = {
            product: set((state) => ({productInput: state.productInput})),
            price: set((state) => ({priceInput: state.priceInput})),
        }
        console.log(productObject)
    },
    // spends: [],
    // spend: {}
}))


export const usePersistPresupuestoStore = create(() => ({
    
}))