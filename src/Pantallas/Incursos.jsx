import React from 'react'
import {Link} from "react-scroll";
import styles from './Inicio.module.css';
import portada from '../img/portada.jpg'
import Alumnos5 from '../img/Alumnos5.jpg'
import cursog1 from '../img/cursog1.jpg'
import { NavLink } from 'react-router-dom';

const Incursos = () => {
  return (
    <div className={styles.inicio}>
      <div id={styles.contgeneral}>
      <div id={styles.cont1}>
      <div id={styles.principal}>
      <div className={styles.titleContainer}>
      <h1 className={styles.titulo}>Cursos de decoración con globos</h1>
      <p>¿Quieres aprender a crear tus propias decoraciones?
      ¡No busques más, nosotros te enseñamos!, da clic en el botón y descubre nuestros cursos disponibles.</p>
      <img src="" alt="" />

      <div className={styles.ctaContainer}>
      <NavLink to="https://www.instagram.com/wujuballoons/"
                    smooth
                    duration={500} className={styles.callToAction}>Contáctanos</NavLink>&nbsp;
      </div>
      </div>

      </div>
      
      <div id={styles.secundario}>
      <div className="slider">
        
      <div className="container" style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-30" src={portada} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={Alumnos5} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={cursog1} alt="Third slide"/>
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
      </div>


      

      </div>

    </div>
  )
}

export default Incursos