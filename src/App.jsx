import  Navbar from "./Menu/Navbar";
import  NavbarAdmin from "./Menu/NavbarAdmin";
import Inicio from "./Pantallas/Inicio";
import Footer from "./Pantallas/Footer";
import Cursos from "./Pantallas/Cursos";
import Eventos from "./Pantallas/Eventos";
import Usuario from "./Pantallas/Usuario";
import Slider1 from "./Pantallas/Slider1";
import ListaPer from './Pantallas/PersonalizarE';
import Steps from "./Pantallas/Steps";
import Calendario from "./Pantallas/Calendario";
import StepsE from "./Pantallas/StepsE";
import Pago from "./Pantallas/Pago";
import ArmatuEvento from "./Pantallas/armatuEvento"

import Admin from "./admin/adminHome";
import AdminCursos from "./admin/adminCursos";
import AdminEmpleados from "./admin/adminEmpleados";
import AdminEventos from "./admin/adminEventos";
import AdminEventosSeparaciones from "./admin/adminEventosSeparaciones";
import AdminFormCursos from "./admin/adminFormCursos";
import AdminModificarCurso from "./admin/adminModificarCurso";
import AdminFormEmpleados from "./admin/adminFormEmpleados";
import AdminFormEventos from "./admin/adminFormEventos";
import AdminSeparacionCursos from "./admin/adminSeparacionCursos";
import AdminFormEventosSeparaciones from "./admin/adminFormEventosSeparaciones";

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const allowedRoutes = [
    '/',
    '/Inicio',
    '/Eventos/armatuEvento',
    '/Cursos',
    '/Eventos',
    '/Usuario',
    '/Slider1',
    '/Inscripción',
    '/Inscripcion',
    '/Calendario',
    '/Eventos/Separacion',
    '/Eventos/Pago',
  ];

  return (
    <div className="App">
      <BrowserRouter>
        {/* {allowedRoutes.includes(window.location.pathname) ? <Navbar /> : <NavbarAdmin />} */}
      
        <Routes>
        {allowedRoutes.map((route) => (
          <Route
            key={route}
            path={route}
            element={<Navbar />}
          />
        ))}
        <Route
          path="*"
          element={<NavbarAdmin />}
        />
      </Routes>

       <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/Inicio" element={<Inicio/>}/>
        <Route exact path="/Cursos" element={<Cursos/>}/>
        <Route exact path="/Eventos" element={<Eventos/>}/>
        <Route exact path="/Eventos/Separacion" element={<ListaPer/>}/>
        <Route exact path="/Eventos/Pago" element={<Pago/>}/>
        <Route exact path="/Usuario" element={<Usuario/>}/>
        <Route exact path="/Slider1" element={<Slider1/>}/>
        <Route exact path="/Inscripción" element={<Steps/>}/>
        <Route exact path="/Calendario" element={<Calendario/>}/>
        <Route exact path="/Eventos/armatuEvento" element={<ArmatuEvento/>}/>

        
        
        <Route exact path="/Admin" element={<Admin/>}/>
        <Route exact path="/Admin/adminCursos" element={<AdminCursos/>}/>
        <Route exact path="/Admin/adminEmpleados" element={<AdminEmpleados/>}/>
        <Route exact path="/Admin/adminEventos" element={<AdminEventos/>}/>
        <Route exact path="/Admin/adminEventosSeparaciones" element={<AdminEventosSeparaciones/>}/>
        <Route exact path="/Admin/adminFormCursos" element={<AdminFormCursos/>}/>
        <Route exact path="/Admin/adminModificarCurso/:id" element={<AdminModificarCurso/>}/>
        <Route exact path="/Admin/adminFormEmpleados" element={<AdminFormEmpleados/>}/>
        <Route exact path="/Admin/adminFormEventos" element={<AdminFormEventos/>}/>
        <Route exact path="/Admin/adminSeparacionCursos/:id" element={<AdminSeparacionCursos/>}/>
        <Route exact path="/Admin/adminFormEventosSeparaciones" element={<AdminFormEventosSeparaciones/>}/>

       </Routes>

       <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default App