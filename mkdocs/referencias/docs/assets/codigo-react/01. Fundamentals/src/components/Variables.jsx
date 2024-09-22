import React from 'react'

const Variables = () => {

    const saludo = "Saludos desde React"
    const imagen = "src/assets/images/imagen1.jpg"
    

  return (

    <div>
        <h2>Componente variables {1+1}</h2>
        <img src={imagen} alt="" />
    </div>
  )
}

export default Variables


