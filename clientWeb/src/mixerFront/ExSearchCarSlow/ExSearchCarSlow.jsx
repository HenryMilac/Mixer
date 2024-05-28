import React, { useState } from 'react'

export default function ExSearchCarSlow() {
  const [cars, setCars] = useState([])
  const [numCar, setNumCar] = useState('')
  const [timeCar, setTimeCar] = useState('')
  const [slowestCar, setSlowestCar] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault()
    const newCar = {
      numCar,
      timeCar
    }
    setCars([...cars, newCar])
    setNumCar('')
    setTimeCar('')
  }

  const searchCar = () => {
    if (cars.length === 0) {
      console.log('No hay carros');
      return;
    }
    let slowCar = cars.reduce((max, car) => max.timeCar > car.timeCar ? max : car);
    setSlowestCar(slowCar);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Numero de carro' className='p-2'
          value={numCar}
          onChange={(e) => {setNumCar(e.target.value)}}
          />
        <input type="text" placeholder='Tiempo que hizo' className='p-2'
          value={timeCar}
          onChange={(e) => {setTimeCar(e.target.value)}}
        />
        <input type="submit" value="Agregar" className='border p-2'/>
      </form>

      <div>
        <button onClick={searchCar} className='border p-2'>Mostrar al carro más lento</button>
        {slowestCar && <p>El carro más lento es {slowestCar.numCar}, hizo un tiempo de: {slowestCar.timeCar}</p>}
      </div>
    </div>
  )
}
