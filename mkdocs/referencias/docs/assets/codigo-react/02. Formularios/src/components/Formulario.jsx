import React, { useState } from 'react'

const Formulario = () => {

    const estadoInicial = {
        todoName: "", 
        todoDescripcion: "", 
        todoEstado: "pendiente"
    }
    const [todo, setTodo] = useState(estadoInicial)
    
    const handleSubmit = () => {

    }

    const handleChange = e => {
        console.log(e.target)
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <p>Formularios Controlados</p>
        <form onSubmit={handleSubmit}>
            <input 
                name="todoName"
                placeholder="Introduce nombre de la tarea"
                type="text" 
                className="form-control mb-2" 
                // onChange={e =>setTodo({...todo, todoName: e.target.value})}
                onChange={e =>handleChange(e)}
                value={todo.todoName}

            />
            <textarea
                name="todoDescripcion"
                placeholder="Introduce la descripcion"
                className="form-control mb-2" 
                onChange={e =>handleChange(e)}
                value={todo.todoDescripcion}
            />
            <select 
                name="todoEstado" 
                className="form-control mb-2" 
                onChange={e =>handleChange(e)}
                value={todo.todoEstado}
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

export default Formulario