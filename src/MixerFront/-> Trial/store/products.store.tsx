import { create } from "zustand";

interface ProductsStore {
    products: Product[]
}
interface Product {
    id: number;
    name: string;
    units: number;
}

export const useProductsStore = create<ProductsStore>(() => ({
    products: [
        {id: 1, name: 'Product 1', units: 10},
        {id: 2, name: 'Product 2', units: 23},
    ]
}))