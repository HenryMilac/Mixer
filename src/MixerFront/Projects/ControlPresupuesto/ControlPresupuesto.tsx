import { useEffect, useState } from "react"
import { usePresupuestoStore } from "./store/presupuesto.store"
import CircularGraphic from "./components/CircularGraphic"
import FormAddSpend from "./components/FormAddSpend"
import SectionSpends from "./components/SectionSpends"

export default function ControlPresupuesto() {

    const presupuesto = usePresupuestoStore((state => state.presupuesto))
    const setPresupuesto = usePresupuestoStore((state => state.setPresupuesto))
    const disponible = usePresupuestoStore((state => state.disponible))
    const setDisponible = usePresupuestoStore((state => state.setDisponible))
    const gastado = usePresupuestoStore((state => state.gastado))
    
    

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
                    <CircularGraphic/>
                    <button>Resetar App</button>
                </div>
                <div>
                    <p>Presupuesto: $ {presupuesto}</p>
                    <p>Gastado: $ {gastado}</p>
                    <p>Disponible: $ {disponible}</p>
                </div>
            </div>

            <FormAddSpend/>

            <SectionSpends/>


        </div>
    )
}