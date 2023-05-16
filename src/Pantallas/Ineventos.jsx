import React from 'react'
import {Link} from "react-scroll";
import styles from './Inicio.module.css';
import ev1 from '../img/eventoAro.jpg'
import ev2 from '../img/eventoPared.jpg'
import ev3 from '../img/eventoLed.jpg'
import { NavLink } from 'react-router-dom';

const Ineventos = () => {
  return (
    <div className={styles.inicio}>
      <div id={styles.cont1}>

      <div id={styles.cuarto}>
      <div className="slider">
        
      <div className="container" style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-30" src={ev1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={ev2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={ev3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Anterior</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Siguiente</span>
  </a>
</div>
</div>
</div>
    </div>




        <div id={styles.tercero}>
      <div className={styles.titleContainer2}>
      <h1 className={styles.titulo}>¡Decoramos tu evento!</h1>
      <p>¿La festividades te abruman?
      ¡No te preocupes, nosotros te ayudamos!
      Da clic en el botón y elíge tu paquete para tu evento de ensueño</p>

      <div className={styles.ctaContainer2}>
      <NavLink to="/Eventos"
                    smooth
                    duration={500} className={styles.callToAction}>Más infromación</NavLink>&nbsp;
      </div>

      </div>
      
  
      </div>
      
      
      
      </div>

      
    </div>
  )
}

export default Ineventos