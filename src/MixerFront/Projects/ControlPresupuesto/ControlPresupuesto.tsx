import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { usePresupuestoStore } from "./store/presupuesto.store"

export default function ControlPresupuesto() {

    const presupuesto = usePresupuestoStore((state => state.presupuesto))
    const setPresupuesto = usePresupuestoStore((state => state.setPresupuesto))
    const disponible = usePresupuestoStore((state => state.disponible))
    const setDisponible = usePresupuestoStore((state => state.setDisponible))
    const gastado = usePresupuestoStore((state => state.gastado))
    
    const [porcentaje, setPorcentaje] = useState(10)

    const AddPresupuesto = (e:any) => {
        e.preventDefault()
    }

    useEffect(() => {
        setDisponible()
    }, [presupuesto])


    return (
        <div className="flex flex-col gap-y-5 p-5 max-w-3xl mx-auto">
            <div>
                <h1>Control de presupuesto</h1>
                <hr/>
            </div>

            <form onClick={AddPresupuesto} className="border border-white p-3">
                <label>Colocar Presupuesto: </label>
                <input type="number" name="" id="" className="text-black"
                    value={presupuesto}
                    onChange={e => setPresupuesto(parseInt(e.target.value))}
                />
                <input type="submit" value="Add" />
            </form>

            <div className="border border-white p-3 flex justify-between">
                <div>
                    <CircularProgressbar
                    styles={buildStyles({
                            trailColor: '#F5F5F5',
                            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                            textSize: '15px',
                            pathTransitionDuration: 0.5,
                        })}
                        value={porcentaje}
                        text={`${porcentaje}% Gastado`}
                    >
                    </CircularProgressbar>
                    <button>Resetar App</button>
                </div>
                <div>
                    <p>Presupuesto: $ {presupuesto}</p>
                    <p>Gastado: $ {gastado}</p>
                    <p>Disponible: $ {disponible}</p>
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