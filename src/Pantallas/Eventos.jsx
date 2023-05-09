import React from 'react'
const data =[ 
  {id : 1,  imageUrl:'',  decoration: '', includes : '' },
  {id : 2,  imageUrl:'',  decoration: '', includes : '' }
]
const ButtonsE =({paquete})=>{
 return  (
  <section className="botonesE">
    <ul>
      <img src={paquete.imageUrl} alt={paquete.decoration} />
      <li><b> Decoración:</b> {paquete.decoration}</li>
      <li><b>Incluye: </b> {paquete.includes}</li>
    </ul>
    <button>click</button>
  </section>
 )
};
const Eventos = () => {
  return (
    <ul>
    {data.map(paquete =>(<ButtonsE key ={paquete.id} paquete ={paquete}/> )
    )}
    </ul>
    );
};



export default Eventos