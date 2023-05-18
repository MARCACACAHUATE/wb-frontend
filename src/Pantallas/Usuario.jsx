import React from 'react'
// import styles from './Usuario.module.css';
import {NavLink} from "react-router-dom"

const Usuario = () => {
  return (
    <div className="body">
      <div className="Usuario">
        <form action="">
          <h2>Ingresa a tu cuenta</h2>
          <span className='line'></span>

          <div className='input-group'>
              <div className='form-group form-cont'>
                <label htmlFor="coment">Tipo de Usuario</label>
                <select name="form-control" id="">
                  <option value="Op1">Adminsitrador</option>
                  <option value="Op2">Empleado</option>
                </select>
              </div>
            
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Ingresa tu email' id='email' />

            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" name="password" placeholder='Ingresa tu contraseña' id="contraseña" />

            <div className='form-txt'>
                <a href="#">Politica de privacidad</a>
                <a href="#">Terminos y condiciones</a>
            </div>
            <NavLink to="/Admin">
            <input  type="submit"/>
            </NavLink>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Usuario