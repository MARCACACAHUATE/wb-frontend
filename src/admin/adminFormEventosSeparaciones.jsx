import React from 'react'
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";


const AdminFormEventosSeparaciones = () => {
  
  const { state } = useLocation();
 
  let separacion = {};

  if (state!=undefined) {
    separacion = state.separacion;
    console.log(separacion);
    
  }

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (state!=undefined) {
      ModifyEvento(data);
    }else{
      saveEvento(data);
    }
  };

  const saveEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    // const resp = await reqqResapi.post("api/eventos/",Jsonsend).then((res) => {
    //   if (res.data.error) {
    //     alert(res.data.message);
    //   } else {
    //     alert(res.data.message);
        navigate("/Admin/adminEventos");
    //   }
    // });
  };

  const ModifyEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.put("api/eventosseparacions/"+separacion.id,Jsonsend).then((res) => {
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
                ? "Modificar Separacion para: " + separacion.nombrePaquete
                : "Agregar Separacion"}
                </h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
              <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="fname">Primer Nombre:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Ingresa el nombre" name="fname" {...register("FirstName")} defaultValue={separacion.firstName} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="lname">Primer Apellido:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el apellido" name="lname" {...register("LastName")} defaultValue={separacion.lastName} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="email">Email:</label>
                  <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="ejemplo@dominio.com" name="email" {...register("email")} defaultValue={separacion.email} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Teléfono:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el telefono" name="lname" {...register("telefono")} defaultValue={separacion.telefono} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Hora del evento:</label>
                  <div className="col-sm-10">
                  <input type="time" className="form-control" id="lname" placeholder="Ingresa la hora del evento" name="lname" pattern="[0-9]{2}:[0-9]{2}" {...register("horaEvento")} defaultValue={separacion.horaEvento} required/>
                  <input type="hidden" className="form-control" id="lname2" placeholder="Ingresa la hora del evento" name="lname2" pattern="[0-9]{2}:[0-9]{2}" {...register("HoraMontaje")} defaultValue={"01:00"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Fecha Evento:</label>
                  <div className="col-sm-10">
                  <input type="date" className="form-control" id="lname" placeholder="Ingresa la fecha del evento" name="lname" {...register("fecha")} defaultValue={separacion.fecha} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Calle:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la calle" name="lname" {...register("calle")} defaultValue={separacion.calle} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Numero:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el numero del local" name="lname" {...register("numero")} defaultValue={separacion.numero} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Colonia:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la colonia" name="lname" {...register("colonia")} defaultValue={separacion.colonia} required/>
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
export default AdminFormEventosSeparaciones
