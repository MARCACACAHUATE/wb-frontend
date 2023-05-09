import React from 'react'
import {Link} from "react-scroll";
import styles from './Inicio.module.css';

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <h1>Cursos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem placeat commodi deserunt eligendi ipsum dignissimos odio sequi corrupti eius at, repellendus, nam non totam dolorem tenetur modi eos eum.</p>
    
      <div>
      <Link to="Cursos"
                    smooth
                    duration={500} className={styles.callToAction}>¡Cotiza ahora!</Link>
      </div>
    </div>
    
  )
}

export default Inicio