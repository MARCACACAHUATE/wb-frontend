import React from "react";
import Select from "react-select"
import makeAnimated from "react-select/animated"; // Importa desde la ruta correcta
import { dataE } from "./DatosEventos.js";
import "./PersonalizarEvento.css";
import imgEvento from '../img/eventoAro.jpg'
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from './../img/logo1.png'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styles from "./Calendario.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { formatCurrency } from './../Hooks/currencyUtils';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ListaPer = () => {
  
  const { state } = useLocation();
  const classes = useStyles();
 
  let evento = {};

  const fechaformat =(fechaOriginal) =>{
    const fechaFormateada = moment(fechaOriginal).format('YYYY-MM-DD');
    return fechaFormateada
  }

  const fechaformatSend =(fechaOriginal) =>{
    const fechaFormateada = moment(fechaOriginal).format('DD-MM-YYYY');
    return fechaFormateada
  }

  if (state!=undefined) {
    evento = state.evento;
    console.log(evento);
  }

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.fecha = fechaformatSend(data.fecha);

    console.log(data);

    navigate("/Eventos/Pago", {
      state: { evento: evento, separacion: data},
    })
  };

  return (
  <>
    <div className="personalizar">
    
    <div className="contenedor">
          <h5 className="titleP">Ingresa tus datos para separar el evento</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            
            <div className="col-md-8">
              <div className="contact-form">
              <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="fname">Primer nombre:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Ingresa el nombre" name="fname" {...register("FirstName")}  required maxlength="100"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="lname">Primer apellido:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el apellido" name="lname" {...register("LastName")}  required maxlength="100"/>
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
                  required maxlength="100"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Teléfono:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el teléfono" name="lname" {...register("telefono" , {
                    required: true,
                    pattern: /^[0-9]{10}$/  // Expresión regular para validar 10 dígitos numéricos
                  })}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      alert("El número de teléfono debe tener 10 dígitos.");
                    }
                  }}  required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Hora del evento:</label>
                  <div className="col-sm-10">
                  <input
                    type="time"
                    className="form-control"
                    id="lname"
                    placeholder="Ingresa la hora del evento"
                    name="lname"
                    pattern="[0-9]{2}:[0-9]{2}" // Expresión regular para validar el formato de la hora
                    {...register("horaEvento", {
                      required: true,
                      pattern: /[0-9]{2}:[0-9]{2}/ // Expresión regular para validar el formato de la hora
                    })}
                    required
                  />
                  {/* <input type="time" className="form-control" id="lname" placeholder="Ingresa la hora del evento" name="lname" pattern="[0-9]{2}:[0-9]{2}" {...register("horaEvento") } required/> */}
                  <input type="hidden" className="form-control" id="lname2" placeholder="Ingresa la hora del evento" name="lname2" pattern="[0-9]{2}:[0-9]{2}" {...register("HoraMontaje")} defaultValue={"01:00"} required/>
                  <input type="hidden" className="form-control" id="lname2" placeholder="Ingresa la hora del evento" name="lname2" {...register("id_Evento")} defaultValue={evento.id} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Fecha evento:</label>
                  <div className="col-sm-10">
                  {/* <input type="date" className="form-control" id="lname" placeholder="Ingresa la fecha del evento" name="lname" {...register("fecha")} required/> */}
                  <input
                    type="date"
                    className="form-control"
                    id="lname"
                    placeholder="Ingresa la fecha del evento"
                    name="lname"
                    pattern="\d{4}-\d{2}-\d{2}" // Expresión regular para validar el formato de la fecha (AAAA-MM-DD)
                    {...register("fecha", {
                      required: true,
                      pattern: /\d{4}-\d{2}-\d{2}/ // Expresión regular para validar el formato de la fecha (AAAA-MM-DD)
                    })}
                    required
                    onBlur={(e) => {
                      const inputDate = new Date(e.target.value);
                      if (isNaN(inputDate) || inputDate.toISOString().slice(0, 10) !== e.target.value) {
                        alert("Por favor, introduce una fecha válida.");
                      }
                    }}
                  />
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Calle:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la calle" name="lname" {...register("calle")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Número:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el número del local" name="lname" {...register("numero")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Colonia:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la colonia" name="lname" {...register("colonia")} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Código postal:</label>
                  <div className="col-sm-10">
                  {/* <input type="number" className="form-control" id="lname" placeholder="Ingresa la colonia" name="lname" {...register("cp")} required/> */}
                  <input
                      type="number"
                      className="form-control"
                      id="lname"
                      placeholder="Ingresa el código postal"
                      name="lname"
                      {...register("cp", {
                        required: true,
                        pattern: /^[0-9]{5}$/ // Expresión regular para validar un código postal de 5 dígitos
                      })}
                      required
                      onBlur={(e) => {
                        if (e.target.value.length !== 5) {
                          alert("Por favor, introduce un código postal válido de 5 dígitos.");
                        }
                      }}
                    />
                    </div>
                </div>
                <br />
                <div className="form-group form-cont">        
                  <div className="col-sm-offset-8 col-sm-12">
                  <button type="submit" className="btn btn-default" >
                    Proceder al pago
                  </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Curso1"
                        height="420"
                        image={imgEvento}
                        title="Curso globos y follaje"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {evento.nombrePaquete}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          El evento ideal para tu "{evento.ocasion}". ¡Estamos listos para brindarte la mejor experiencia en tu evento!
                         <br /><br />
                         
                          Costo de envío: <strong>{formatCurrency(evento.costoEnvioMaterial)}</strong><br />
                          Costo de reservación: <strong>{formatCurrency(evento.costo_reservacion)}</strong><br />
                          Costo total: <strong>{formatCurrency(evento.costo_total)}</strong><br />
                          Estado: {evento.estado}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    
              </Card>
            </div>
          </form>
    </div>
        
        {/* <img src={imgEvento} alt="" className="imgEvento"/> */}
       
    </div>
    
    </>
  );
};
export default ListaPer