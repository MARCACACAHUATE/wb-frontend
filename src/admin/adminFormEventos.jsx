import React from 'react'
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { NavLink } from "react-router-dom";

const adminFormCursos = () => {
  return (
    <div className={styles.inicio}>

        <div className="container contact">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img src={logo} alt="Logo"/>
                <h2>Eventos</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="fname">Nombre del paquete:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Ingresa el nombre del paquete" name="fname" required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="lname">Ocasión:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la ocasion" name="lname" required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="email">Servicios:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="email" placeholder="Ingresa los servicios " name="email" required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Mobiliario:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el mobiliario" name="lname" required/>
                  
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Color de Globos:</label>
                  <div className="col-sm-10">
                  <select className='form-control'>
                    <option value="Option 1">Azul</option>
                    <option value="Option 2">Rojo</option>
                    <option value="Option 3">Verde</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Costo de envio:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="lname" placeholder="Ingresa el costo de envio" name="lname" required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Costo de reservación:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="lname" placeholder="Ingresa el costo de reservacion" name="lname" required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                <label className="control-label col-sm-6 label" for="comment">Estado:</label>
                  <div className="col-sm-10">
                  <select className='form-control'>
                    <option value="Option 1">Nuevo León</option>
                    <option value="Option 2">Coahuila</option>
                    <option value="Option 3">Tamaulipas</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Municipio:</label>
                  <div className="col-sm-10">
                  <select className='form-control'>
                    <option value="Option 1">Monterrey</option>
                    <option value="Option 2">San Nicolás</option>
                    <option value="Option 3">Guadalupe</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">        
                  <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Crear Evento</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
export default adminFormCursos
