import React from 'react'

const Tarea = ({tarea}) => {

    const {nombre, descripcion, estado, prioridad, id } = tarea
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
        <div className="fw-bold">{nombre} ({estado? "finalizada":"Pendiente"})</div>
        {descripcion}
        </div>
        <span className="badge bg-primary rounded-pill me-2">
            {prioridad && "Prioritario"}
        </span>
        <div>
            <button className="btn btn-danger me-2"> Eliminar</button>
            <button className="btn btn-warning">Editar</button>
        </div>
  </li>
  )
}

export default Tarea