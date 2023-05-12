import React from 'react'
import {Link} from "react-scroll";
import styles from './Inicio.module.css';


const Inicio = () => {
  return (
    <div className={styles.inicio}>

      <div className={styles.titleContainer}>
      

      <h1>Cursos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem placeat commodi deserunt eligendi ipsum dignissimos odio sequi corrupti eius at, repellendus, nam non totam dolorem tenetur modi eos eum.</p>
      <img src="" alt="" />
      </div>
      
      <div className={styles.ctaContainer}>
      <Link to="Cursos"
                    smooth
                    duration={500} className={styles.callToAction}>¡Cotiza ahora!</Link>
      </div>

      <div className={styles.titleContainer2}>
      <h1>Eventos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem placeat commodi deserunt eligendi ipsum dignissimos odio sequi corrupti eius at, repellendus, nam non totam dolorem tenetur modi eos eum.</p>
    
      </div>
      
      <div className={styles.ctaContainer2}>
      <Link to="Eventos"
                    smooth
                    duration={500} className={styles.callToAction}>¡Cotiza ahora!</Link>
      </div>
      



    </div>
    
  )
}

export default Inicio