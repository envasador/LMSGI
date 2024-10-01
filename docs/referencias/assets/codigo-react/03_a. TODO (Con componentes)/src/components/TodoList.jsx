import React, { useState } from 'react'
import Formulario from './Formulario'
import Tarea from './Tarea'

const TodoList = () => {

    // Variables & Estados
    const [tareas, setTareas] = useState([])

    
   // Funciones
    const agregarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea])
    }


  return (
    <div>
        <Formulario agregarTarea={agregarTarea}/>

        <ul className='class="list-group list-group-numbered mt-4'>

        {
            tareas.map(item => (
                <Tarea 
                    key={item.id}
                    tarea = {item}
                />
            ))
        }

        </ul>

    </div>
  )
}

export default TodoList