
import  Navbar from "./Menu/Navbar";
import  NavbarAdmin from "./Menu/NavbarAdmin";
import Inicio from "./Pantallas/Inicio";
import Cursos from "./Pantallas/Cursos";
import Eventos from "./Pantallas/Eventos";
import Usuario from "./Pantallas/Usuario";
import Slider1 from "./Pantallas/Slider1";

import Admin from "./admin/adminHome";
import AdminCursos from "./admin/adminCursos";
import AdminEmpleados from "./admin/adminEmpleados";
import AdminEventos from "./admin/adminEventos";
import AdminFormCursos from "./admin/adminFormCursos";
import AdminFormEmpleados from "./admin/adminFormEmpleados";
import AdminFormEventos from "./admin/adminFormEventos";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";




function App() {


  return (
    <div className="App">
      <BrowserRouter>

      {    
          window.location.pathname === '/' || window.location.pathname === '/Inicio' || window.location.pathname === '/Cursos' || window.location.pathname === '/Eventos' || window.location.pathname === '/Usuario' || window.location.pathname === '/Slider1' 
            ? <Navbar /> 
            : <NavbarAdmin />
    
      }

       <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/Inicio" element={<Inicio/>}/>
        <Route exact path="/Cursos" element={<Cursos/>}/>
        <Route exact path="/Eventos" element={<Eventos/>}/>
        <Route exact path="/Usuario" element={<Usuario/>}/>
        <Route exact path="/Slider1" element={<Slider1/>}/>

        <Route exact path="/Admin" element={<Admin/>}/>
        <Route exact path="/Admin/adminCursos" element={<AdminCursos/>}/>
        <Route exact path="/Admin/adminEmpleados" element={<AdminEmpleados/>}/>
        <Route exact path="/Admin/adminEventos" element={<AdminEventos/>}/>
        <Route exact path="/Admin/adminFormCursos" element={<AdminFormCursos/>}/>
        <Route exact path="/Admin/adminFormEmpleados" element={<AdminFormEmpleados/>}/>
        <Route exact path="/Admin/adminFormEventos" element={<AdminFormEventos/>}/>

       </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App