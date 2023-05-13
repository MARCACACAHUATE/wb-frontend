import React from 'react'
import {Link} from "react-scroll";
import styles from './Inicio.module.css';
import c1 from '../img/curso1.jpg'
import c2 from '../img/curso2.jpg'
import c3 from '../img/curso3.jpg'


const Inicio = () => {
  return (
    <div className={styles.inicio}>

      <div className="principal">
      <div className={styles.titleContainer}>
      

      <h1>Cursos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem placeat commodi deserunt eligendi ipsum dignissimos odio sequi corrupti eius at, repellendus, nam non totam dolorem tenetur modi eos eum.</p>
      <img src="" alt="" />
      </div>
      
      <div className={styles.ctaContainer}>
      <Link to="/Cursos"
                    smooth
                    duration={500} className={styles.callToAction}>¡Cotiza ahora!</Link>
      </div>

      </div>
      <div className="slider">
        
      <div className="container" style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-30" src={c1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={c2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={c3} alt="Third slide"/>
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

    
      <div className={styles.titleContainer2}>
      <h1>Eventos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem placeat commodi deserunt eligendi ipsum dignissimos odio sequi corrupti eius at, repellendus, nam non totam dolorem tenetur modi eos eum.</p>
    
      </div>
      
      <div className={styles.ctaContainer2}>
      <Link to="Eventos"
                    smooth
                    duration={500} className={styles.callToAction}>¡Cotiza ahora!</Link>
      </div>


      <div className="container" style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-30" src={c1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={c2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-30" src={c3} alt="Third slide"/>
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
    
  )
}

export default Inicio