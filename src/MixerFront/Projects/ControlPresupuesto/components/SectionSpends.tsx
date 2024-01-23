export default function SectionSpends() {
    return (
        <div className="border border-white p-3">
            <div className="flex gap-x-4">
                <p>Filtrar gastos</p>
                <select name="" id="" className="text-black">
                    <option value="">-- Seleccione --</option>
                    <option value="">Comida</option>
                    <option value="">Transporte</option>
                    <option value="">Casa</option>
                    <option value="">Otros</option>
                </select>
            </div>
            <p>Gastos:</p>
            <div className="flex flex-col gap-y-3">
                <div className="border border-white p-2 flex justify-between">
                    <p>Categoria | Pizza $400, agregado el 29</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}