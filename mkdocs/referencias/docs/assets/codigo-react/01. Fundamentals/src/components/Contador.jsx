import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)

    const aumentar = () => {
        console.log("click")
        setContador (contador+1)
    }

  return (

    <div>
        <h1>Contador</h1>
        <h3>Aumentando: {contador} </h3>

    <h4>
        {
            // evaluar ? positivo : negativo
            //contador > 2 ? "Es mayor que 2":"Es menor que 2"
            //contador > 2 && "Es mayor que 2"
            contador > 2 || "Es mayor que 2"

        }

    </h4>
     


        <button onClick={()=> aumentar()}>Aumentar</button>
    </div>
  )
}

export default Contador