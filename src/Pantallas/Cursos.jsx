import React from 'react'
import styles from './Cursos.module.css';
import './slider.css'
import images from '../Hooks/images'; 
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

import c1 from '../img/cursof1.jpg'
import c2 from '../img/cursof2.jpg'
import c3 from '../img/cursog3.jpg'
import c4 from '../img/curso3.jpg'

const Cursos = () => {
  return (
    <div className={styles.cursos}>
      <div className={styles.nav2}>

      <div className={styles.titleContainer}>
      <h1 className={styles.titulo}>¡Da un vistazo a nuestra oferta de cursos! </h1>
      </div>
      <nav className={styles.submenu}>
        <NavLink to="/Calendario"smooth
                    duration={500} className={styles.callToAction} >Fechas disponibles</NavLink>&nbsp;
        <NavLink to="/Inscripción" smooth
                    duration={500} className={styles.callToAction}>Inscripciones</NavLink>
      </nav>
      </div>
      <div id={styles.cont1}>
      
      <div id={styles.principal}>

        <h2 className={styles.subtitulo}>Curso de globos, flores y follajes</h2>
        <p>Nuestro curso de globos florales abarcan técnicas avanzadas para la construcción de figuras con globos, ideas creativas para decoraciones con globos, configuraciones básicas y avanzadas para arreglos florales con globos, guías paso a paso sobre cómo crear diferentes diseños y mucho más. Además, los alumnos recibirán asistencia personalizada por parte de nuestros instructores para ayudarlos a resolver cualquier duda o problema que puedan encontrar durante el curso. </p>
        <img src={c1} alt="" className={styles.imagen} />
        <img src={c2} alt="" className={styles.imagen} />
        <img src={c3} alt="" className={styles.imagen} />
        <h3 className={styles.resaltar}>¿Qué aprenderás?</h3>
        <div className={styles.lista}>
        
        <ul> 
          <li className={styles.tabla}>Armado de Estructuras con poca inversión</li>
          <li className={styles.tabla}>Enlonado y fundas para estructuras</li>
          <li className={styles.tabla}>Montaje de Arcos de entrada</li>
          <li className={styles.tabla}>Esenario de Bienvenida con doble vista</li>
          <li className={styles.tabla}>Montaje de esenario principal</li>
          <li className={styles.tabla}>Candy bar</li>
          <li className={styles.tabla}>Centro de mesa</li>
          <li className={styles.tabla}>Montaje de mesa para invitados</li>
          <li className={styles.tabla}>Implementación de luz led a estructuras</li>
          <li className={styles.tabla}>Aplicación de vinil en el coroplast</li>
          <li className={styles.tabla}>Redes sociales y cotizaciones justas</li>
        </ul>
        
        </div>
        
      </div>
      
      </div>

      <div id={styles.cont2}>
      <div id={styles.secundario}>

        <h2 className={styles.subtitulo}>Curso de burbujas con helio</h2>
        <p>La decoración con burbujas de herlio es lo último en tendencia. Aquí aprenderás todo sobre el proceso de realización de las burbujas con Helio, así como su valoración en el mercado. </p>
        <img src={c4} alt="" className={styles.imagen2} />
        
      </div>
      </div>
      
    </div>

    
  )
}

export default Cursos