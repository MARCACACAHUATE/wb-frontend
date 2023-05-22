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
      <div id={styles.contgeneral}>
      <div id={styles.cont1}>
      <div id={styles.cuarto}>
      <div className="slider">
        
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{margin:0, marginBottom:20}}>
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ev1} class="d-block w-30" alt="First"/>
    </div>
    <div class="carousel-item">
      <img src={ev2} class="d-block w-30" alt="Second"/>
    </div>
    <div class="carousel-item">
      <img src={ev3} class="d-block w-30" alt="Third"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
</div>
    </div>

    



        <div id={styles.tercero}>
      <div className={styles.titleContainer2}>
      <h1 className={styles.titulo}>¡Decoramos tu evento!</h1>
      <p>¿La festividades te abruman?
      ¡No te preocupes, nosotros te ayudamos!
      Da clic en el botón y elíge tu paquete para tu evento de ensueño.</p>

      <div className={styles.ctaContainer2}>
      <NavLink to="/Eventos"
                    smooth
                    duration={500} className={styles.callToAction}>Más información</NavLink>&nbsp;
      </div>

      </div>
      
  
      </div>
      </div>
      
      
      </div>
    </div>
  )
}

export default Ineventos