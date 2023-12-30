import { create } from "zustand";

interface Count {
    products: Products[]
    countProduct1: number
    countProduct2: number
    totalProducts: {totalProductsCount: number}
    plusCountProduct1: () => void
    restCountProduct1: () => void
    plusCountProduct2: () => void
    restCountProduct2: () => void
    doNothing: () => void
    clearProducts: () => void
    addProduct: () => void
}
interface Products {
    id: number
    name: string
}




export const useProductsStore = create<Count>((set, get) => ({
    products: [
        {id: 1, name: 'Product 01'},
        {id: 2, name: 'Product 02'},
    ],
    countProduct1: 2,
    countProduct2: 3,
    totalProducts: {get totalProductsCount() {
        return get().countProduct1 + get().countProduct2
    }},
    plusCountProduct1: () => set(state => (
        {countProduct1: state.countProduct1 + 1}
    )),
    restCountProduct1: () => set(state => (
        {countProduct1: state.countProduct1 - 1}
    )),
    plusCountProduct2: () => set(state => (
        {countProduct2: state.countProduct2 + 1}
    )),
    restCountProduct2: () => set(state => (
        {countProduct2: state.countProduct2 - 1}
    )),
    doNothing: () => set(state => (
        {products: [...state.products]}
    )),
    clearProducts: () => set(() => (
        {products: []}
    )),
    addProduct: () => set(state => (
        {products: [...state.products, {id: state.products.length + 1 , name: `Product 0${state.products.length + 1}`}]}
    )),
}))