export default function FormAddSpend() {
    return (
        <div className="border border-white p-3">
            <p>Agregar gasto:</p>
            <hr />

            <form className="flex flex-col text-black">
                <input type="text" placeholder="Producto"/>
                <input type="number" placeholder="Precio"/>
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