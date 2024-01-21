import { create } from "zustand";

interface ProductsStore  {
    products: ProductObject[]
    plusUnitFunc: (unitValue: number) => void
}
interface ProductObject {
    id: number;
    name: string;
    units: number;
}


export const useProductsStore = create<ProductsStore>((set) => ({
    products: [
        {id: 1, name: "Product 1", units: 10, 
            plusUnit: () => set(state.products[0].units = state.products[0].units + 1)
        },
        {id: 2, name: "Product 2", units: 32},
    ],
    plusUnitFunc: () => console.log()
}))