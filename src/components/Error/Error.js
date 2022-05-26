import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div className='error'>
      <p className='error-text'>Tu página no se encuentra disponible. Te invitamos a visitar nuestra página de inicio:</p>
      <NavLink to="/" className= 'opcionesMenuSeccion'>Ir a HOME</NavLink>
    </div>
  )
}

export default Error