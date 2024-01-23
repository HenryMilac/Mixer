export default function ControlPresupuesto() {
    return (
        <div className="flex flex-col gap-y-5 p-10 max-w-3xl mx-auto">
            <div>
                <h1>Control de presupuesto</h1>
                <hr />
            </div>

            <form className="border border-white p-3">
                <label>Colocar Presupuesto:     </label>
                <input type="number" name="" id="" className="text-black"/>
                <input type="submit" value="Add" />
            </form>

            <div className="border border-white p-3 flex justify-between">
                <div>
                    <p>Grafico</p>
                    <button>Resetar App</button>
                </div>
                <div>
                    <p>Presupuesto: $</p>
                    <p>Disponible: $</p>
                    <p>Gastado: $</p>
                </div>
            </div>

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

        </div>
    )
}