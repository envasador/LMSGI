import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Formulario = ({agregarTarea}) => {


    // Estados
    const estadoInicial = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        prioridad:false
    }

    // const [error, setError] = useState(false)
    const [tarea, setTarea ] = useState(estadoInicial)


    // Funciones
    const handleSubmit = e => {
      e.preventDefault()

      const {nombre, descripcion, estado, prioridad } = tarea

      if (!nombre.trim()) {
          e.target[0].focus()
          Swal.fire({
          title: 'Error',
          text: 'El campo nombre es obligatorio',
          icon: 'error',
        })
        return
      }
      if (!descripcion.trim()) {
        e.target[1].focus()
        Swal.fire({
        title: 'Error',
        text: 'El campo descripción es obligatorio',
        icon: 'error',
      })
      return
    }

    Swal.fire({
      title: 'Éxito',
      text: 'Tarea agregada con éxito',
      icon: 'success',
    })

    // Llamar a la funcion agregar tarea
    agregarTarea (
      {
        nombre:nombre,
        descripcion:descripcion,
        estado: estado === "pendiente" ? false:true,
        prioridad:prioridad,
        id: Date.now()
      }
    )

      setTarea(estadoInicial)

    }

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.type ==="checkbox" ? e.target.checked : e.target.value
        })
    }

  return (
    <div className='container'>

    {/* {
      error ? <div className="alert alert-danger">Campos obligatorios</div>:null
    } */}

  <form onSubmit={handleSubmit}>
    <input 
      name="nombre"
      type="text" 
      className="form-control mb-2" 
      placeholder='Introduce el nombre de la tarea'
      onChange={e=> handleChange(e)}
      value ={tarea.nombre}
    />
    <input 
      name="descripcion"
      type="text" 
      className="form-control mb-2" 
      placeholder='Introduce la descripción de la tarea'
      onChange={e=> handleChange(e)}
      value ={tarea.descripcion}

    />
    <select 
      name="estado" 
      className="form-control mb-2"
      onChange={e=> handleChange(e)}
      value ={tarea.estado}


    >
      <option value="pendiente">Pendiente</option>
      <option value="completada">Completada</option>
    </select>


    <div className="form-check mb-2">
        <input 
            className="form-check-input" 
            type="checkbox" 
            name="prioridad" 
            checked ={tarea.prioridad}
            onChange={e=> handleChange(e)}

        />
        <label 
            className="form-check-label" 
            htmlFor="flexCheckDefault"
        >
            Prioridad
        </label>
    </div>
    <button 
      className="btn btn-primary"
      type="submit"
    >
      Añadir
    </button>
  </form>
</div> 

 )
}

export default Formulario