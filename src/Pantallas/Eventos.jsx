import React, { useEffect, useState } from 'react'
import './Eventos.css'
import ButtonsE from "../Componentes/BotonesEventos.jsx"
import data from "./DatosEventos.js"
import { reqqResapi } from "../api/reqRes";
import styles from "./../Pantallas/Calendario.module.css";


const Eventos = () => {
 
  const [isUpdate, setisUpdate] = useState(false);
  const [EventosList, setEventosList] = useState([]);

  useEffect(() => {
    getEventosList();
  }, [isUpdate]);

  const getEventosList = async() => {

    const res = await reqqResapi.get('api/eventos').then(res => {

        if (res.data.error) {
              console.log(res.data.error);
        } else {
              res.data.data.sort((a, b) => new Date(b.id) - new Date(a.id));
              setEventosList(res.data.data);
              console.log(res.data.data);
        }

    });   
  }

  return (
    <div className="even">
      <div className={styles.cont1}>
        <br /><br />
        <h1 className={styles.titulo}>
        ¡Da un vistazo a nuestros paquetes de Eventos!
        </h1>
        <br /><br />
      </div>
    <ul className='cuadros'>
    {EventosList.map(paquete =>(<ButtonsE key ={paquete.id} paquete ={paquete}/> )
    )}
    </ul>
    </div>
    
    )
    
};

export default Eventos





