import React, { useState } from 'react'

const Formulario = () => {

    const [lista, setLista] = useState([])

    const [fruta, setFruta] = useState("")
    const [descripcion, setDescripcion] = useState("")


    const procesarDatos = (e) =>  {
        e.preventDefault()
        if (!fruta.trim() || !descripcion.trim() ){
            console.log("error...");
            return
        }
        
        setLista ([
            ...lista,
            {fruta: fruta, descripcion:descripcion}
        ])
        e.target.reset()
    }

  return (
    <div className='container'>
        <h1>formulario</h1>

        <form onSubmit={procesarDatos}>
            <input 
                type="text" 
                placeholder='Fruta'
                className='form-control mb-2'
                onChange={e => setFruta(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Descripcion'
                className='form-control mb-2'
                onChange={e => setDescripcion(e.target.value)}
            />

            <button className='btn btn-primary w-100' type ='submit' > Añadir</button>


        </form>


        <ul>
            {

                lista.map((item, index) => (
                    <li key={index}> {item.fruta} - {item.descripcion}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default Formulario