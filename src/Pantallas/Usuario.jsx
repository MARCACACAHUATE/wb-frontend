import React from 'react'
import styles from './Usuario.module.css';

const Usuario = () => {
  return (
    <div className='style.Usuario'>
      <form action="">
        <div> 
          <label htmlFor="coment">Tipo de cuenta</label>
        <select name="Usuario" id="">
          <option value="op1">Administrador</option>
          <option value="op2">Empleado</option>
        </select>
        </div>
        
        <label htmlFor="email">Correo Electronico</label>
        <input type="email" id='email' name='email' placeholder='Ingresa tu correo' required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id='password' name='password' placeholder='Ingresa tu contraseña' required />

        <button type='submit'>Ingresar</button>
      </form>

    </div>

  )
}

export default Usuario