import React from 'react'
import './Eventos.css'




const data =[ 
  {id : 1,  imageUrl:'',  decoration: 'gfdgfh', includes : ['hsgd','hhghdgf'] },
  {id : 2,  imageUrl:'',  decoration: 'gfdgfh', includes : ['hsgd','hhghdgf'] }

  
]
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
      <li className='buttonNext'><button>click</button></li>
    </ul>
    
  </section>
 )
};
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



