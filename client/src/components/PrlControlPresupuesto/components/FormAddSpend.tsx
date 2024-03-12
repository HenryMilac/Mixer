import { usePresupuestoStore } from "../store/presupuesto.store"

export default function FormAddSpend() {

    const productInput = usePresupuestoStore((state => state.productInput))
    const setProductInput = usePresupuestoStore((state => state.setProductInput))
    const priceInput = usePresupuestoStore((state => state.priceInput))
    const setPriceInput = usePresupuestoStore((state => state.setPriceInput))
    // const categoryInput = usePresupuestoStore((state => state.categoryInput))
    // const setProductInput = usePresupuestoStore((state => state.setCategoryInput))
    // const  = usePresupuestoStore((state => state.))
    const handleSpend = usePresupuestoStore((state => state.handleSpend))

    return (
        <div className="border border-white p-3">
            <p>Agregar gasto:</p>
            <hr />

            <form onSubmit={handleSpend} className="flex flex-col text-black">
                <input type="text" placeholder="Producto"
                    value={productInput}        
                    onChange={e => setProductInput(e.target.value)}

                />
                <input type="number" placeholder="Precio"
                    value={priceInput}
                    onChange={e => setPriceInput(e.target.value)}
                />
                <select name="" id="">
                    <option value="">-- Seleccione --</option>
                    <option value="">Comida</option>
                    <option value="">Transporte</option>
                    <option value="">Casa</option>
                    <option value="">Otros</option>
                </select>
                <input type="submit" value="Add" className="text-white"/>
            </form>
        </div>
    )
}