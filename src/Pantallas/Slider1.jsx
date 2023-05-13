import React from 'react'
import c1 from '../img/curso1.jpg'
import c2 from '../img/curso2.jpg'
import c3 from '../img/curso3.jpg'



const Slider1 = () => {
  return (
    <div className="container" style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={c1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={c2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={c3} alt="Third slide"/>
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
  )
}

export default Slider1