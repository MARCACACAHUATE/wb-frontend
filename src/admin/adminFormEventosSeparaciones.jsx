import React from 'react'
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";
import moment from 'moment';


const AdminFormEventosSeparaciones = () => {
  
  const { state } = useLocation();
 
  let separacion = {};

  const fechaformat =(fechaOriginal) =>{
    const fechaFormateada = moment(fechaOriginal).format('YYYY-MM-DD');
    return fechaFormateada
  }

  const fechaformatSend =(fechaOriginal) =>{
    const fechaFormateada = moment(fechaOriginal).format('DD-MM-YYYY');
    return fechaFormateada
  }

  if (state!=undefined) {
    state.separacion.fecha = fechaformat(state.separacion.fecha);
    separacion = state.separacion;
    console.log(separacion);
  }

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.fecha = fechaformatSend(data.fecha);
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
        // navigate("/Admin/adminEventos");
      }
    });
  };

  const ModifyEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.put("api/eventosseparacions/"+separacion.id,Jsonsend).then((res) => {
      console.log(res);
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
                  <label className="control-label col-sm-6 label" for="fname">Primer nombre:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Ingresa el nombre" name="fname" {...register("FirstName")} defaultValue={separacion.firstName} disabled={sessionStorage.getItem('role')!="Admin"} required  maxlength="100"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="lname">Primer apellido:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el apellido" name="lname" {...register("LastName")} defaultValue={separacion.lastName} disabled={sessionStorage.getItem('role')!="Admin"} required  maxlength="100"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="email">Email:</label>
                  <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="ejemplo@dominio.com" name="email" {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Expresión regular para validar el formato del correo
                    })} 
                    onBlur={(e) => {
                      if (!e.target.validity.valid) {
                        alert("Por favor, introduce un correo válido.");
                      }
                    }} 
                    defaultValue={separacion.email} disabled={sessionStorage.getItem('role')!="Admin"} required  maxlength="100"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Teléfono:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el telefono" name="lname" {...register("telefono" , {
                      required: true,
                      pattern: /^[0-9]{10}$/  // Expresión regular para validar 10 dígitos numéricos
                    })}
                    onBlur={(e) => {
                      if (e.target.value.length !== 10) {
                        alert("El número de teléfono debe tener 10 dígitos.");
                      }
                    }} 
                  defaultValue={separacion.telefono} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Hora del evento:</label>
                  <div className="col-sm-10">
                  <input type="time" className="form-control" id="lname" placeholder="Ingresa la hora del evento" name="lname" pattern="[0-9]{2}:[0-9]{2}" // Expresión regular para validar el formato de la hora
                    {...register("horaEvento", {
                      required: true,
                      pattern: /[0-9]{2}:[0-9]{2}/ // Expresión regular para validar el formato de la hora
                    })}
                    defaultValue={separacion.horaEvento} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  <input type="hidden" className="form-control" id="lname2" placeholder="Ingresa la hora del evento" name="lname2" pattern="[0-9]{2}:[0-9]{2}" {...register("HoraMontaje")} defaultValue={"01:00"} required/>
                  <input type="hidden" className="form-control" id="lname2" placeholder="Ingresa la hora del evento" name="lname2" {...register("id_Evento")} defaultValue={separacion.id_Evento} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Fecha Evento:</label>
                  <div className="col-sm-10">
                  <input type="date" className="form-control" id="lname" placeholder="Ingresa la fecha del evento" name="lname" pattern="\d{4}-\d{2}-\d{2}" // Expresión regular para validar el formato de la fecha (AAAA-MM-DD)
                    {...register("fecha", {
                      required: true,
                      pattern: /\d{4}-\d{2}-\d{2}/ // Expresión regular para validar el formato de la fecha (AAAA-MM-DD)
                    })}
                    onBlur={(e) => {
                      const inputDate = new Date(e.target.value);
                      if (isNaN(inputDate) || inputDate.toISOString().slice(0, 10) !== e.target.value) {
                        alert("Por favor, introduce una fecha válida.");
                      }
                    }} defaultValue={separacion.fecha} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Calle:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la calle" name="lname" {...register("calle")} defaultValue={separacion.calle} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Número:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="lname" placeholder="Ingresa el numero del local" name="lname" {...register("numero")} defaultValue={separacion.numero} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Colonia:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la colonia" name="lname" {...register("colonia")} defaultValue={separacion.colonia} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">        
                  <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default" disabled={sessionStorage.getItem('role')!="Admin"}>
                    {state!=undefined
                      ? "Modificar separacion"
                      : "Crear separacion"
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
