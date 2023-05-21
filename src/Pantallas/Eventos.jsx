import React from 'react'
import './Eventos.css'
import ButtonsE from "../Componentes/BotonesEventos.jsx"
import data from "./DatosEventos.js"


const Eventos = () => {
 
  return (
    <div className="even">
    <h1 className='tituloE'>Da un vistazo a nuestros paquetes de Eventos</h1>
    <ul className='cuadros'>
    {data.map(paquete =>(<ButtonsE key ={paquete.id} paquete ={paquete}/> )
    )}
    </ul>
    </div>
    
    )
    
};

export default Eventos





