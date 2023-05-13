import React from "react";
import logo from "../img/logo1.png";
import {NavLink} from "react-router-dom"


const Navbar =()=>{
  return(

    <header style={{color:"dark"}}>
      <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth" >
        <NavLink to="/Inicio">
          <img src={logo} height="60" alt="" />
        </NavLink>
        <div className="adminheader">
          <h4>Admin</h4>
        </div>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
          <h4><NavLink to="/Admin" className="nav-item nav-link" style={{color: "dark"}}>Inicio</NavLink></h4>
          <h4><NavLink to="/Admin/adminCursos" className="nav-item nav-link" style={{color: "dark"}}>Cursos</NavLink></h4>
          <h4><NavLink to="/Admin/adminEventos" className="nav-item nav-link" style={{color: "dark"}}>Eventos</NavLink></h4>
          <h4><NavLink to="/Admin/adminEmpleados" className="nav-item nav-link" style={{color: "dark"}}>Empleados</NavLink></h4>
          <h4><NavLink to="/" className="nav-item nav-link" style={{color: "dark"}}>Cerrar Sesion</NavLink></h4>

          </div>
        </div>
        
      </nav>
      

    </header>
  )
}

export default Navbar