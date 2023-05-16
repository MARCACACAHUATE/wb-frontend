import React from 'react'
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";


const adminFormCursos = () => {
  
  const { state } = useLocation();
 
  let evento = {};

  if (state!=undefined) {
    evento = state.evento;
    console.log(evento);
    
  }

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

    let total = parseInt(data.costoEnvioMaterial)+parseInt(data.costo_reservacion);
    data.costo_total = total;
    if (state!=undefined) {
      ModifyEvento(data);
    }else{
      saveEvento(data);
    }
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

  const ModifyEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.put("api/eventos/"+evento.id,Jsonsend).then((res) => {
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
                <h2>
                {state!=undefined
                ? "Modificar Evento: " + evento.nombrePaquete
                : "Agregar Evento"}
                </h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="nombrePaquete">Nombre del paquete:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="nombrePaquete" placeholder="Ingresa el nombre del paquete" name="nombrePaquete" {...register("nombrePaquete")} defaultValue={evento.nombrePaquete} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="ocasion">Ocasión:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="ocasion" placeholder="Ingresa la ocasion" name="ocasion" {...register("ocasion")} defaultValue={evento.ocasion} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="servicios">Servicios:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="servicios" placeholder="Ingresa los servicios " name="servicios" {...register("servicios")} defaultValue={evento.servicios} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="mobiliario">Mobiliario:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="mobiliario" placeholder="Ingresa el mobiliario" name="mobiliario" {...register("mobiliario")} defaultValue={evento.mobiliario} required/>
                  
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="colorGlobos">Color de Globos:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("colorGlobos")}>
                    <option value="Azul" selected={evento.colorGlobos=="Azul"}>Azul</option>
                    <option value="Rojo" selected={evento.colorGlobos=="Rojo"}>Rojo</option>
                    <option value="Verde" selected={evento.colorGlobos=="Verde"}>Verde</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="costoEnvioMaterial">Costo de envio:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="costoEnvioMaterial" placeholder="Ingresa el costo de envio" name="costoEnvioMaterial" {...register("costoEnvioMaterial")} defaultValue={evento.costoEnvioMaterial} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="costo_reservacion">Costo de reservación:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="costo_reservacion" placeholder="Ingresa el costo de reservacion" name="costo_reservacion" {...register("costo_reservacion")} defaultValue={evento.costo_reservacion} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                <label className="control-label col-sm-6 label" for="estado">Estado:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("estado")}>
                    <option value="Nuevo León" selected={evento.estado=="Nuevo León"}>Nuevo León</option>
                    <option value="Coahuila" selected={evento.estado=="Coahuila"}>Coahuila</option>
                    <option value="Tamaulipas" selected={evento.estado=="Tamaulipas"}>Tamaulipas</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Municipio:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("id_Municipio")}>
                    <option value="1" selected={evento.id_Municipio=="1"}>Monterrey</option>
                    <option value="2" selected={evento.id_Municipio=="2"}>San Nicolás</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">        
                  <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">
                    {state!=undefined
                      ? "Modificar Evento"
                      : "Crear Evento"
                    }
                  </button>
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
