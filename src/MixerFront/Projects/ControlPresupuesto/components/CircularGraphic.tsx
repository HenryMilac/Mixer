import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { useState } from "react"



export default function CircularGraphic() {
    const [porcentaje, setPorcentaje] = useState(10)

    return (
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
    )
}