import { usePresupuestoStore } from "../store/presupuesto.store";
import CircularGraphic from "./CircularGraphic";




export default function SectionSummary() {
    const presupuesto = usePresupuestoStore((state => state.presupuesto))
    const setPresupuesto = usePresupuestoStore((state => state.setPresupuesto))
    const disponible = usePresupuestoStore((state => state.disponible))
    const setDisponible = usePresupuestoStore((state => state.setDisponible))
    const gastado = usePresupuestoStore((state => state.gastado))


    return (
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
    )
}