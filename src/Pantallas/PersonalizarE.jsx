import React from "react";
import Select, { components } from 'react-select'
import makeAnimated from "react-select";
import {dataE} from "./DatosEventos.js"
import "./PersonalizarEvento.css"

const ListaPer = () => {     
  
  return (
    <>
      <h1 className="Titulo">
        Hola
      </h1>
      <div className="select">
         <Select      
      closeMenuOnScroll={false}
      components={makeAnimated}
      placeholder ="Selecciona servicios extra "
      defaultInputValue={[dataE[1]]}  
      isMulti
      options={dataE}  
      /> 
      
      </div>
      </>
    );
    
};

export default ListaPer

