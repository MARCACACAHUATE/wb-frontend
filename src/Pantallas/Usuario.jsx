import React from 'react'

const Usuario = () => {
  return (
    <div className='style.Usuario'>
      <form action="">
        <div> 
          <label htmlFor="coment">Tipo de Usuario</label>
        <select name="Usuario" id="">
          <option value="op1">Administrador</option>
          <option value="op2">Empleado</option>
        </select>
        </div>
        
        <label htmlFor="email">Correo Electronico</label>
        <input type="email" id='email' name='email' placeholder='Ingresa tu correo' required />

        <label htmlFor="password">ContraseÃ±a</label>
        <input type="password" id='password' name='password' placeholder='Ingresa tu contraseÃ±a' required />

        <button type='submit'>Ingresar</button>
      </form>

    </div>

  )
}

export default Usuario