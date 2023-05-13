import React from 'react';
import './Eventos.css'


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
         <li className='buttonNext' ><button className='customButton'>Agregar al carrito</button></li>
       </ul>
       
     </section>
    )
   };
   export default ButtonsE