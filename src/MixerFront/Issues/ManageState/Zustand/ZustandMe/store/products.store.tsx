import { create } from "zustand";

interface products {
    products: product[]
    clearProducts: () => void
}
interface product {
    id: number
    name: string
    count: number,
    increaseCount: () => void
    decreaseCount: () => void
}

export const Products = create<products>((set) => {

    const increaseCount = (id: number) => {
        set(state => {
            const updatedProducts = state.products.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1
                    };
                }
                return product;
            });
            return { products: updatedProducts };
        });
    };
    const decreaseCount = (id: number) => {
        set(state => {
            const updatedProducts = state.products.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count - 1
                    };
                }
                return product;
            });
            return { products: updatedProducts };
        });
    };

    return {
        products: [
            {id: 0, name: 'Tv', count: 2, increaseCount: () => increaseCount(0), decreaseCount: () => decreaseCount(0)},
            {id: 1, name: 'Radio', count: 2, increaseCount: () => increaseCount(1), decreaseCount: () => decreaseCount(1)},
            {id: 2, name: 'Radio', count: 2, increaseCount: () => increaseCount(2), decreaseCount: () => decreaseCount(2)},
            {id: 3, name: 'Radio', count: 2, increaseCount: () => increaseCount(3), decreaseCount: () => decreaseCount(3)}
        ],
        clearProducts: () => set(() => (
            {products: []}
        ))
    };
});
