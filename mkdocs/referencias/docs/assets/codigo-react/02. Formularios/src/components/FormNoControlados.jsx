import React, { useRef } from 'react'

const FormNoControlados = () => {

    const formulario = useRef(null)
    //console.log(formulario)

    const handleSubmit = e => {     
        e.preventDefault()
        //console.log("clickkkkkkkk");
        const datos = new FormData(formulario.current)
        console.log(...datos.entries())
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos);

        const {todoName, todoDescripcion, todoEstado} = objetoDatos
        
        if (!todoName.trim() || !todoDescripcion.trim() || !todoEstado.trim()) {
            console.log("error!!!!!!!!!!");
            return
        }

        console.log("Enviando objeto datos al server!!!!")

    }

  return (
    <div>
        <p>Form No Controlados</p>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
                name="todoName"
                placeholder="Introduce nombre de la tarea"
                type="text" 
                className="form-control mb-2" 
                defaultValue="Tarea 1"
            />
            <textarea
                name="todoDescripcion"
                placeholder="Introduce la descripcion"
                className="form-control mb-2" 
                defaultValue="Descripción de la tarea 1"
            />
            <select 
                name="todoEstado" 
                className="form-control mb-2" 
                defaultValue="Pendiente"

            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button
                 type="submit" 
                 className='btn btn-primary'
            >
                Añadir
            </button>
        </form>
    </div>
  )
}

export default FormNoControlados