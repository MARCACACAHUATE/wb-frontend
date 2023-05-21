import React from 'react'
import {NavLink} from "react-router-dom"
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";


const Usuario = () => {

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      Login(data);
  };

  const Login = async (Jsonsend) => {

    console.log(Jsonsend);

    try {
      //llamado al api promesa y se le asigna la interfaz
      const resp = await reqqResapi.post("api/Users/auth",Jsonsend).then((res) => {
        
        alert("Bienvenido "+res.data.firstName+" "+res.data.lastName);
        console.log(res.data.token);

        sessionStorage.setItem('email',res.data.email);
        sessionStorage.setItem('firstName',res.data.firstName);
        sessionStorage.setItem('id',res.data.id);
        sessionStorage.setItem('lastName',res.data.lastName);
        sessionStorage.setItem('role',res.data.role);
        sessionStorage.setItem('token',res.data.token);

        navigate("/Admin");

      });
      
    } catch (error) {
      alert("ERROR: "+error.response.data.error.Message);
      console.log(error.response.data.error.Message);
    }
  };
  return (
    <div className="body">
      <div className="Usuario">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Ingresa a tu cuenta</h2>
          <span className='line'></span>

          <div className='input-group'>
              {/* <div className='form-group form-cont'>
                <label htmlFor="coment">Tipo de Usuario</label>
                <select name="form-control" id="">
                  <option value="Op1">Adminsitrador</option>
                  <option value="Op2">Empleado</option>
                </select>
              </div> */}
            
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Ingresa tu email' id='email' {...register("email")} required/>

            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" name="password" placeholder='Ingresa tu contraseña' id="password" {...register("password")} required/>

            {/* <div className='form-txt'>
                <a href="#">Politica de privacidad</a>
                <a href="#">Terminos y condiciones</a>
            </div> */}
            <input  type="submit"/>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Usuario