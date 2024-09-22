import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const Navbar = () => {
  const { user, setUser } = useUserContext()

  const navigate = useNavigate()

  const cerrarSesion = () => {
    console.log('cerrando...')
    navigate('/login')
    setUser(null)
  }

  return (
    <div className='navbar navbar-dark bg-dark mt-5'>
      <Link to='/' className='navbar-brand mx-3'>
        INICIO
      </Link>
      <div>
        <div className='d-flex'>
          {user && (
            <NavLink to='/dashboard' className='btn btn-dark  mr-2'>
              Dashboard
            </NavLink>
          )}
          {user || (
            <NavLink className='btn btn-dark  mr-2' to='/contact'>
              Contacto
            </NavLink>
          )}
          {user ? (
            <button className='btn btn-dark' onClick={() => cerrarSesion()}>
              Logout
            </button>
          ) : (
            <NavLink className='btn btn-dark  mr-2' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
