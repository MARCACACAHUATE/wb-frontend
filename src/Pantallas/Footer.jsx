import React from 'react';
import styles from './Footer.css';
import {Link} from "react-router-dom"
import logo from "../img/logo1.png";
function Footer() {
  return (
    
      <footer className=" d-flex flex-wrap  justify-content-between align-items-center py-4   border-top ">
        <div className="col-md-4 d-flex align-items-center ">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"/>
            </svg>
          </a>
          <Link to="/" className='col-12 col-mdb3 d-flex align-items-center justify-content-center'>
          <img src={logo} className='mx-2' width='200'/>
        </Link>
        <ul className="col-12 col-md-12 list-unstyled">
            <li className="font-weight-bold mb-2 text-center">Sitio web oficial de WujuBalloons</li>
            <li className="text-center">Contáctanos: +52 8131410362</li>
            <li className="text-center">Correo electrónico: wujuballoons@gmail.com</li>
        </ul>
         
        </div>

        <ul className="nav col-md-2 justify-content-between list-unstyled d-flex text-dark" >
        
          <li className="ms-5"><a className="text-body-secondary" href="https://www.instagram.com/wujuballoons/"><i class="bi bi-instagram"></i><svg className="bi" width="2" height="5"><use xlinkHref="#instagram"/></svg></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/WujuBalloons"><i class="bi bi-facebook"></i><svg className="bi" width="2" height="5"><use xlinkHref="#facebook"/></svg></a></li>
          
        </ul>
      </footer>
    
  

  );
}

export default Footer;