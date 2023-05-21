import React from "react";
import Select from 'react-select'
import makeAnimated from "react-select/animated"; // Importa desde la ruta correcta
import { dataE } from "./DatosEventos.js";
import "./PersonalizarEvento.css";

const ListaPer = () => {
  return (
  <>
    <div className="personalizar">
    
  
    <div className="containerP">
    <div className="perso">
      <h5 className="titleP">Personaliza tu evento</h5>
     
      <h6 className="questions">¿Cuál es la ocasion de tu evento?</h6>
        <Select className="optionsP"
          closeMenuOnScroll={false}
          components={makeAnimated}
          placeholder="Ocasion de tu evento"
          options={[{value:"boda",label:"Boda"}]}/>
        
        <h6 className="questions">¿Cuál es la temática de tu evento?</h6>
                  
           <input
           className ="inputGroup" 
           placeholder="Escribe la tematica de tu Evento" 
           type="text" required="" 
           autocomplete="off"/>
            
            

         <h6 className="questions">Selecciona el color de tus globos</h6>
        <Select className="optionsP"
          closeMenuOnScroll={false}
          components={makeAnimated}
          placeholder="Colores de tus Globos"
          options={[{value:"cromado",label:"Cromado"}]}
        />
      </div>
      <div className="select">
        <h5 className="titleP">Selecciona alguno de nuestros servicios extra</h5>
        <Select className="options"
          closeMenuOnScroll={false}
          components={makeAnimated}
          placeholder="Selecciona servicios extra"
          isMulti
          options={dataE}
          
        />
        
         
            <input
           className ="inputGroup" 
           placeholder="Escribe las letras/numeros que requieres" 
           type="text" required="" 
           autocomplete="off"/>
           <Select className="options"
          closeMenuOnScroll={false}
          components={makeAnimated}
          placeholder="Selecciona el tipo de mesa que deseas"
          
          options={[{value:"dulce", label:"Dulce"}]}
          
        />
           
      </div>
      
    </div>
    <button className="buttonComp">Comprar</button>
    </div>
    
    </>
  );
};
export default ListaPer