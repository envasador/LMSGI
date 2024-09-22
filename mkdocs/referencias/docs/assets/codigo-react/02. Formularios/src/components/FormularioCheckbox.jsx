import React, { useState } from 'react'

const FormularioCheckBox = () => {

    const estadoInicial = {
        todoName: "", 
        todoDescripcion: "", 
        todoEstado: "pendiente",
        todoCheck:false
    }
    const [todo, setTodo] = useState(estadoInicial)

    const [error, setError] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const {todoName, todoDescripcion} = todo

        if (!todoName.trim() || !todoDescripcion.trim()) {
            setError(true);
            console.log(error)
            return
        }
        console.log("Enviando objeto datos al server!!!!")
        setError(false)
        setTodo(estadoInicial)
    }

    // const handleChange = (e) => {
    //     //console.log(e.target)
    //     setTodo({
    //         ...todo,
    //         [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    //     })
    // }

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target 
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

  return (
    <div>
        <p>Formularios Controlados con CheckBox</p>

        {
            error ? <div className="alert alert-danger">Campos obligatorios</div> : null
        }

        <form onSubmit={handleSubmit}>
            <input 
                name="todoName"
                placeholder="Introduce nombre de la tarea"
                type="text" 
                className="form-control mb-2" 
                // onChange={e =>setTodo({...todo, todoName: e.target.value})}
                onChange={e=>handleChange(e)}
                value={todo.todoName}

            />
            <textarea
                name="todoDescripcion"
                placeholder="Introduce la descripcion"
                className="form-control mb-2" 
                onChange={e=>handleChange(e)}
                value={todo.todoDescripcion}
            />
            <select 
                name="todoEstado" 
                className="form-control mb-2" 
                onChange={e=>handleChange(e)}
                value={todo.todoEstado}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <div className="form-check mb-2">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    name="todoCheck"
                    checked={todo.todoCheck}
                    onChange={e => handleChange(e)}
                />
                <label 
                    className="form-check-label" 
                    htmlFor="flexCheckDefault">
                </label>
                Prioridad
            </div>
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

export default FormularioCheckBox