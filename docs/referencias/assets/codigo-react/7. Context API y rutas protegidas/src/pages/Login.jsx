import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUserContext } from '../context/UserContext'

const Login = () => {
  const datosInitialState = {
    email: '',
    pass: '',
  }
  const { user, setUser } = useUserContext()
  const [users, setUsers] = useState([])
  const [datos, setDatos] = useState(datosInitialState)
  const [error, setError] = useState(null)
  const [esregistro, setEsregistro] = useState(false)

  const navigate = useNavigate()

  const procesarDatos = (e) => {
    e.preventDefault()
    const { email, pass } = datos

    if (!email.trim()) {
      setError('Escribe un email')
      return
    }
    if (!pass.trim()) {
      setError('Escribe una password')
      return
    }
    if (pass.length < 6) {
      setError('Escribe una contraseña de 6 o mas carácteres')
      return
    }
    if (esregistro) {
      registrar()
    } else {
      login()
    }
  }

  const registrar = async () => {
    console.log('Registrando...')
    Swal.fire({
      title: 'Éxito',
      text: 'Usuario registrado',
      icon: 'success',
    })
    setUsers([...users, datos])
    setDatos(datosInitialState)
    setError(null)
    setUser(true)
    navigate('/dashboard')
  }

  const login = async () => {
    console.log('Logueando...')
    // Validamos el user
    setUser(true)
    setDatos(datosInitialState)
    setError(null)
    navigate('/dashboard')
  }

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='mt-5'>
      <h3 className='text-center'>{esregistro ? 'Registro' : 'Login'}</h3>
      <hr />
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
          <form onSubmit={procesarDatos}>
            {error && <div className='alert alert-danger'>{error}</div>}
            <input
              name='email'
              type='email'
              className='form-control mb-2'
              placeholder='Introduce el email'
              onChange={(e) => handleChange(e)}
              value={datos.email}
            />
            <input
              name='pass'
              type='password'
              className='form-control mb-2'
              placeholder='Introduce el password'
              onChange={(e) => handleChange(e)}
              value={datos.pass}
            />
            <button className='btn btn-lg btn-dark w-100  mb-2' type='submit'>
              {esregistro ? 'Registrar' : 'Login'}
            </button>
            <button
              className='btn btn-sm btn-info w-100  mb-2'
              onClick={() => setEsregistro(!esregistro)}
              type='button'>
              {esregistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
