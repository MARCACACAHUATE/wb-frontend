import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from './../Hooks/currencyUtils';
import c1 from "../img/CursoGuadalajara.jpg";


const ButtonsE =({paquete})=>{
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
                 <li>Reservacion: {formatCurrency(paquete.costo_reservacion)}</li>
                 <li>Envio: {formatCurrency(paquete.costoEnvioMaterial)}</li>
                 <li>Total: <strong>{formatCurrency(paquete.costo_total)}</strong></li>
               {/* ))} */}
             </ul> </li>
         <li > 
         <div className='customButton'>
          <Link  key={paquete.decoration} to= {`/Eventos/${paquete.decoration}`}>{'Siguiente'}</Link> 
          </div>
          </li>
       </ul>
      
     </section>
    )
   };
   export default ButtonsE