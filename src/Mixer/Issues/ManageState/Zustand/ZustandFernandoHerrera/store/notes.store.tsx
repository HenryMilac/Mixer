import { create } from "zustand";

interface Count {
    products: products[]
    countProduct1: number
    countProduct2: number
    plusCountProduct1: () => void
    restCountProduct1: () => void
    plusCountProduct2: () => void
    restCountProduct2: () => void
}
interface products {
    id: number
    name: string
}

export const count = create<Count>(set => ({
    products: [
        {id: 1, name: 'Product 01'},
        {id: 2, name: 'Product 02'},
    ],
    countProduct1: 0,
    countProduct2: 0,
    plusCountProduct1: () => set(state => ({
        countProduct1: state.countProduct1 + 1
    })),
    restCountProduct1: () => set(state => ({
        countProduct1: state.countProduct1 - 1
    })),
    plusCountProduct2: () => set(state => ({
        countProduct2: state.countProduct2 + 1
    })),
    restCountProduct2: () => set(state => ({
        countProduct2: state.countProduct2 - 1
    })),
}))