import React from 'react'
import './Eventos.css'
import ButtonsE from "./BotonesEventos.jsx"
import data from "./DatosEventos.js"


const Eventos = () => {
 
  return (
    <>
    <h1 className='titulo'>Eventos/Servicios</h1>
    <ul>
    {data.map(paquete =>(<ButtonsE key ={paquete.id} paquete ={paquete}/> )
    )}
    </ul>
    </>
    );
    
};

export default Eventos





