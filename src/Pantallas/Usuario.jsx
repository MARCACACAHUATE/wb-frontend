import React from 'react'
import styles from './Usuario.module.css';

const Usuario = () => {
  return (
    <body>
    <div className='style.Usuario'>
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

          <input className='btn' type="submit" value={Ingresar}/>

        </div>

      </form>
    </div>
    </body>
  )
}

export default Usuario