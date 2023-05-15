import React from 'react';
import { Link } from 'react-router-dom';


const ButtonsE =({paquete})=>{
    return  (
     <section className="botonesE">
       <ul className='list'>
         <img src={paquete.imageUrl} alt={paquete.decoration} width={100} />
         <li className='deco'><b> Decoración:</b> {paquete.decoration}</li>
         <li className='include'><b>Incluye: </b> <ul>
               {paquete.includes.map((item, index) => (
                 <li key={index}>{item}</li>
               ))}
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