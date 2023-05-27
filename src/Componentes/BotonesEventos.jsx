import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { formatCurrency } from './../Hooks/currencyUtils';
import c1 from "../img/CursoGuadalajara.jpg";


const ButtonsE =({paquete})=>{
  const navigate = useNavigate();

  const separarEvento = async (paquete) => {
    // history.push('/Admin/adminFormEventos', { param: evento });
    navigate("/Eventos/Separacion", {
        state: { evento: paquete },
      })
  };

    return  (
     <section className="botonesE">
       <ul className='list'>
        <div className='img-container'>
          <img src={c1} alt={paquete.nombrePaquete} width={100} />
        </div>
         <li className='deco'>{paquete.nombrePaquete} <br /><strong>{paquete.estado}</strong></li>
         <li className='include'><b>Incluye: </b> <ul>
               {/* {paquete.includes.map((item, index) => ( */}
                 <li>{paquete.ocasion}</li>
                 <li>{paquete.servicios}</li>
                 <li>{paquete.mobiliario}</li>
                 <li>Reservación: {formatCurrency(paquete.costo_reservacion)}</li>
                 <li>Envío: {formatCurrency(paquete.costoEnvioMaterial)}</li>
                 <li>Total: <strong>{formatCurrency(paquete.costo_total)}</strong></li>
               {/* ))} */}
             </ul> </li>
             
         <li > 
         <div className='customButton' onClick={()=>separarEvento(paquete)}>
          Siguiente
          </div>
          </li>
       </ul>
      
     </section>
    )
   };
   export default ButtonsE