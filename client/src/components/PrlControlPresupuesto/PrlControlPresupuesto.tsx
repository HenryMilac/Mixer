import { useEffect, useState } from "react"
import { usePresupuestoStore } from "./store/presupuesto.store"
import FormAddSpend from "./components/FormAddSpend"
import SectionSpends from "./components/SectionSpends"
import SectionSummary from "./components/SectionSummary"

export default function PrlControlPresupuesto() {

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
            <h1>Control de presupuesto<hr/></h1>

            <form onClick={AddPresupuesto} className="border border-white p-3">
                <label>Colocar Presupuesto: </label>
                <input type="number" name="" id="" className="text-black"
                    value={presupuesto}
                    onChange={e => setPresupuesto(parseInt(e.target.value))}
                />
                <input type="submit" value="Add" />
            </form>


            <SectionSummary/>
            <FormAddSpend/>
            <SectionSpends/>
        </div>
    )
}