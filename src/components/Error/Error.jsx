import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <NavBar />
      <div className='error-section'>
          <h1>Esta página no existe, por favor, prueba con otra.</h1>
          <Link to='/' className='button'>Volver al inicio</Link>
      </div>
    </>
    
  )
}

export default Error
