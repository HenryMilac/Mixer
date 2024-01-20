import { create } from "zustand";


export const useProductStore = create((set) => ({
    nameProduct: 'TV',
    countProduct: 10,
    plusCount: () => set(state => ({countProduct: state.countProduct + 1})),    
    restCount: () => set(state => ({countProduct: state.countProduct - 1})),    
}))