import React from 'react'

const Listas = () => {

    // const estadoInicial = [1, 2, 3, 4, 5, 6, 7]

    const estadoInicial = [
        {id:1, texto: "tarea 1"},
        {id:2, texto: "tarea 2"},
        {id:3, texto: "tarea 3"},
    ]

    const [lista, setLista] = React.useState(estadoInicial)


    const añadirElemento = () => {

        setLista ([
            ...lista,
            {id:4, texto:"tarea 4"}
        ]
        )
    }        

  return (
    <div>
        <h2>Listas</h2>
{/* 
        {
            lista.map((item, index) => (
            <h4 key={index}>{item}</h4>
            ))
        } */}


        {
            lista.map((item, index) => (
            <h4 key={item.id}>{item.texto}</h4>
            ))
        }

        <button onClick={()=> añadirElemento()}>Añadir Elemento</button>

    </div>
  )
}

export default Listas