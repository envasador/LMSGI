import React from 'react'

const Navbar = () => {

  return (
    <div className='navbar navbar-dark bg-dark mt-5'>
      <nav to='/' className='navbar-brand mx-3'>
        INICIO
      </nav>
      <div>
        <div className='d-flex'>
            <nav to='/dashboard' className='btn btn-dark  mr-2'>
              Dashboard
            </nav>
           <nav className='btn btn-dark  mr-2' to='/contact'>
              Contacto
            </nav>
            <button className='btn btn-dark'>
              Logout
            </button>
            <nav className='btn btn-dark  mr-2' to='/login'>
              Login
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
