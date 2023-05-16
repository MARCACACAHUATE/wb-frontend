import React from 'react'
import styles from './Cursos.module.css';
import './slider.css'
import images from '../Hooks/images'; 
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';


const Cursos = () => {
  return (
    <div className={styles.cursos}>
      <div className={styles.titleContainer}>
      <h1>Contenido del curso</h1>

      <nav>
        <NavLink to="/Cursos" >Cursos</NavLink>&nbsp;
        <NavLink to="/" >Calendario</NavLink>&nbsp;
        <NavLink to="/Inscripción" >Incripciones</NavLink>
      </nav>

      <motion.div className='slider-container'>
      <motion.div className='slider' drag= 'x' dragConstraints ={{right: 0, left:10}} >
      {images.map(image => (
          <motion.div className='item'>
            <img src={image} alt=''/>
          </motion.div>
        ))}
      </motion.div>
        
      </motion.div>
      </div>
      <div className='list-Tecnicas'>
        <ul >
          <li>Burbujas con pintura</li>
          <li>Confetti</li>
          <li>Microperlas</li>
          <li>Englobado</li>
          <li>Diamantina</li>
          <li>Tasstelsen tendencia</li>
          <li>Pompones</li>
          <li>Globos con helio</li>
          <li>Buquet</li>
        </ul>
      <h2>¡Y más de 10 técnicas!</h2>
    


      </div>


      
    </div>
  )
}

export default Cursos