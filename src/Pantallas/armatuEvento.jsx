import React from "react";
import Select from 'react-select'
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
import { reqqResapi } from "../api/reqRes";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ArmatuEvento = () => {
  
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
    data.costoEnvioMaterial = 1000;
    data.costo_reservacion = 3000;
    let total = parseInt(data.costoEnvioMaterial)+parseInt(data.costo_reservacion);
    data.costo_total = total;
    saveEvento(data);
  };

  const saveEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.post("api/eventos/",Jsonsend).then((res) => {
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert("Evento creado con éxito");
        console.log(res.data.data);
        navigate("/Eventos/Separacion", {
            state: { evento: res.data.data },
          })
      }
    });
  };

  return (
  <>
    <div className="personalizar">
    
    <div className="contenedor">
          <h5 className="titleP">¡Arma tu evento a tu estilo!</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            
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
                        Bienvenido a nuestra interfaz de personalización de eventos, donde tus sueños se hacen realidad. Aquí podrás dar vida a la ocasión perfecta, adaptándola a tu estilo y preferencias. Nuestro objetivo es ayudarte a crear un evento único y memorable en cada detalle.

Comienza seleccionando el tipo de evento que deseas personalizar: ya sea una boda elegante, una fiesta temática o una conferencia profesional, tenemos opciones para todos los gustos. Una vez que hayas elegido, podrás sumergirte en un mundo de posibilidades.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    
              </Card>
            </div>
            <div className="col-md-8">
            <div className="contact-form">
                <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="nombrePaquete">Nombre del paquete:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="nombrePaquete" placeholder="Ingresa el nombre del paquete" name="nombrePaquete" {...register("nombrePaquete")} required maxlength="50"/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="ocasion">Ocasión:</label>
                  <div className="col-sm-10">          
                  <select className='form-control' {...register("ocasion")}>
                    <option value="Boda">Boda</option>
                    <option value="Fiesta infantil">Fiesta infantil</option>
                    <option value="XV años">XV años</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="servicios">Servicios:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("servicios")}>
                    <option value="Mesa de postres">Mesa de postres</option>
                    <option value="Renta de mobiliario">Renta de mobiliario</option>
                    <option value="Pisos de madera">Pisos de madera</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="mobiliario">Mobiliario:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("mobiliario")}>
                    <option value="Mesas y sillas paquete chicho (20 personas)">Mesas y sillas paquete chico (20 personas)</option>
                    <option value="Mesas y sillas paquete mediano (50 personas)">Mesas y sillas paquete mediano (50 personas)</option>
                    <option value="Mesas y sillas paquete grande (100 personas)">Mesas y sillas paquete grande (100 personas)</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="colorGlobos">Color de globos:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("colorGlobos")}>
                    <option value="Azul" selected={evento.colorGlobos=="Azul"}>Azul</option>
                    <option value="Rojo" selected={evento.colorGlobos=="Rojo"}>Rojo</option>
                    <option value="Verde" selected={evento.colorGlobos=="Verde"}>Verde</option>
                    <option value="Verde" selected={evento.colorGlobos=="Rosa"}>Rosa</option>
                    <option value="Verde" selected={evento.colorGlobos=="Negro"}>Negro</option>
                    <option value="Verde" selected={evento.colorGlobos=="Blanco"}>Blanco</option>
                  </select>
                  </div>
                </div>
                
                <input type="hidden" className="form-control" id="costo_reservacion" placeholder="Ingresa el costo de reservacion" name="estado" {...register("estado")} defaultValue={"Nuevo León"} required/>

                
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Municipio:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("id_Municipio")}>
                    <option value="1" selected={evento.id_Municipio=="1"}>Monterrey</option>
                    <option value="2" selected={evento.id_Municipio=="2"}>San Nicolás</option>
                  </select>
                  </div>
                </div>
                <input type="hidden" className="form-control" id="lname2" placeholder="Estado del evento" name="lname2" {...register("Id")} defaultValue={"1"}  required/>

                <h2>Cotización</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Costo de envío de material</td>
            <td>$1000.00</td>
            <td></td>
          </tr>
          <tr>
            <td>Costo de reservación</td>
            <td>$3000.00</td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Total</th>
            <td>$4000.00</td>
          </tr>
        </tfoot>
      </table>

                <div className="form-group form-cont">        
                  <div className="col-sm-offset-10 col-sm-16">
                  <button type="submit" className="btn btn-default">
                    Crear evento
                  </button>
                  </div>
                </div>
              </div>
            </div>
            
          </form>
    </div>
        
    </div>
    
    </>
  );
};
export default ArmatuEvento