import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({message}) => {
  return (
    <>
      <div className='error-section'>
          <h1>{message || 'Esta página no existe, por favor, prueba con otra.'}</h1>
          <Link to='/' className='button'>Volver al inicio</Link>
      </div>
    </>
    
  )
}

export default Error
