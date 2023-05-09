import React from 'react'
import styles from './Cursos.module.css';

const Cursos = () => {
  return (
    <div className={styles.cursos}>
      <div className={styles.titleContainer}>
      <h1>Contenido del curso</h1>
      
        <ul>
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