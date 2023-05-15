import React from 'react'
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";


const adminFormCursos = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    saveEvento(data);
  };

  const saveEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.post("api/eventos/",Jsonsend).then((res) => {
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        navigate("/Admin/adminEventos");
      }
    });
  };

  return (
    <div className={styles.inicio}>

        <div className="container contact">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img src={logo} alt="Logo"/>
                <h2>Eventos</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="nombrePaquete">Nombre del paquete:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="nombrePaquete" placeholder="Ingresa el nombre del paquete" name="nombrePaquete" {...register("nombrePaquete")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="ocasion">Ocasión:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="ocasion" placeholder="Ingresa la ocasion" name="ocasion" {...register("ocasion")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="servicios">Servicios:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="servicios" placeholder="Ingresa los servicios " name="servicios" {...register("servicios")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="mobiliario">Mobiliario:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="mobiliario" placeholder="Ingresa el mobiliario" name="mobiliario" {...register("mobiliario")} required/>
                  
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="colorGlobos">Color de Globos:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("colorGlobos")}>
                    <option value="Azul">Azul</option>
                    <option value="Rojo">Rojo</option>
                    <option value="Verde">Verde</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="costoEnvioMaterial">Costo de envio:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="costoEnvioMaterial" placeholder="Ingresa el costo de envio" name="costoEnvioMaterial" {...register("costoEnvioMaterial")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="costo_reservacion">Costo de reservación:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="costo_reservacion" placeholder="Ingresa el costo de reservacion" name="costo_reservacion" {...register("costo_reservacion")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                <label className="control-label col-sm-6 label" for="estado">Estado:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("estado")}>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Municipio:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("id_Municipio")}>
                    <option value="1">Monterrey</option>
                    <option value="2">San Nicolás</option>
                    <option value="3">Guadalupe</option>
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
          </form>
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
