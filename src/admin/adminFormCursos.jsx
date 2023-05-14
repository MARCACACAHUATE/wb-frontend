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
                <h2>Cursos</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="fname">Nombre del curso:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Ingresa el nombre del curso" name="fname"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="lname">Temática:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la temática" name="lname"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="email">Detalles:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="email" placeholder="Ingresa los detalle " name="email"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Fecha inicio:</label>
                  <div className="col-sm-10">
                  <input type="date" className="form-control" id="lname" name="lname"/>
                  
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Fecha fin:</label>
                  <div className="col-sm-10">
                  <input type="date" className="form-control" id="lname" name="lname"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Costo de reservación:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="lname" placeholder="Ingresa el costo de reservación" name="lname"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Costo de total:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el costo de total" name="lname"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Calle:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la calle" name="lname"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Número:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el número" name="lname"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Municipio:</label>
                  <div className="col-sm-10">
                  <select className='form-control'>
                    <option value="Option 1">Monterrey</option>
                    <option value="Option 2">San Nicolas</option>
                    <option value="Option 3">Guadalupe</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">        
                  <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Crear Curso</button>
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

