import React from "react";
import Select from 'react-select'
import makeAnimated from "react-select/animated"; // Importa desde la ruta correcta
import { dataE } from "./DatosEventos.js";
import "./PersonalizarEvento.css";
import imgEvento from '../img/eventoAro.jpg'

const ListaPer = () => {
  return (
  <>
    <div className="personalizar">
    <div className="contenedor">
          <h5 className="titleP">Personaliza tu Evento</h5>
          <form className="row">
            <div className="pregunta">
              <label for="ocasion" class="form-label">¿Cuál es la ocasión de tu evento?</label>
              <select class="form-select" id="ocasion" aria-label="Default select example">
                <option selected>Seleccionar...</option>
                <option value="1">Boda</option>
                <option value="2">Fiesta infantil</option>
                <option value="3">XV años</option>
              </select>
            </div>
            <div className="pregunta">
              <label for="ocasion" class="form-label">¿Cuál es la temática de tu evento?</label>
              <input type="text" class="form-control" id="inputPassword"></input>
            </div>
            <div className="pregunta">
              <label for="ocasion" class="form-label">Selecciona el color de tus globos</label>
              <select class="form-select" id="ocasion" aria-label="Default select example">
                <option selected>Seleccionar...</option>
                <option value="1">Azul</option>
                <option value="2">Rojo</option>
                <option value="3">Morado</option>
              </select>
            </div>
            <div className="pregunta">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre" placeholder="Introduce tu nombre"></input>
            </div>
            <div className="pregunta">
              <label for="apellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="apellido" placeholder="Introduce tu apellido"></input>
            </div>
            <div className="pregunta">
              <label for="apellido" class="form-label">Teléfono</label>
              <input type="number" class="form-control" id="apellido" placeholder="Introduce tu teléfono"></input>
            </div>
            <div className="pregunta">
              <label for="mail" class="form-label">Email</label>
              <input type="mail" class="form-control" id="mail" placeholder="ejemplo@dominio.com"></input>
            </div>
            <div className="pregunta">
              <label for="hora" class="form-label">Hora del evento</label>
              <input type="time" class="form-control" id="hora"></input>
            </div>
            <div className="pregunta">
              <label for="hora" class="form-label">Hora del montaje</label>
              <input type="time" class="form-control" id="hora"></input>
            </div>
            <div className="pregunta">
              <label for="hora" class="form-label">Fecha</label>
              <input type="date" class="form-control" id="hora"></input>
            </div>
            <div className="pregunta">
              <div className="row g-3">
              <div className="col">
                <label for="calle" class="form-label">Calle</label>
                <input type="text" class="form-control" id="calle" placeholder="Ingresa la calle" aria-label="First name"></input>
              </div>
              <div className="col">
                <label for="numero" class="form-label">Número</label>
                <input type="text" class="form-control" id="numero" placeholder="Número" aria-label="Last name"></input>
              </div>
              <div className="col">
                <label for="numero" class="form-label">Colonia</label>
                <input type="text" class="form-control" id="numero" placeholder="Ingresa la colonia" aria-label="Last name"></input>
              </div>
              </div>
              
            </div>
          </form>
          <button className="buttonComp">Comprar</button>
        </div>
        <img src={imgEvento} alt="" className="imgEvento"/>
    </div>
    
    </>
  );
};
export default ListaPer