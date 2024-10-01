import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError()

  console.log(error)
  return (
    <div>
      <h1>Página de error!!!!</h1>
      <p>{error.message}</p>
      <p>{error.statusText}</p>
      <Link to='/'> Volver al home</Link>
    </div>
  )
}

export default NotFound
