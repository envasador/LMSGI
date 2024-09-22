import React from 'react'

const Eventos = () => {

    const estadoInicial = "Soy un texto"
    const [texto, setTexto] = React.useState(estadoInicial)

    const eventoClick = () => {
        setTexto("nuevo textoooooooooooooooo")
    }


  return (
    <div>
        <h2>Eventos</h2>
        <h3>{texto}</h3>
        <hr />

        <button onClick = {() => eventoClick()}>Click</button>
    </div>
  )
}

export default Eventos