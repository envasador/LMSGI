import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
  return (
    <div>
      <h1>LayoutPublic</h1>
      <Navbar />
      {/* <nav>Navbar</nav> */}
      {/* <main>Main</main> */}
      <Outlet />
      <footer className='bg-light text-center text-lg-start'>Footer</footer>
    </div>
  )
}

export default LayoutPublic
