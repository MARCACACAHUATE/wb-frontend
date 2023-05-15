
import  Navbar from "./Menu/Navbar";
import Inicio from "./Pantallas/Inicio";
import Cursos from "./Pantallas/Cursos";
import Eventos from "./Pantallas/Eventos";
import Usuario from "./Pantallas/Usuario";
import Slider1 from "./Pantallas/Slider1";
import ListaPer from './Pantallas/PersonalizarE';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
       <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/Inicio" element={<Inicio/>}/>
        <Route exact path="/Cursos" element={<Cursos/>}/>
        <Route  exact path="/Eventos/"element={<Eventos/>}/>        
        <Route  exact path="/Eventos/:decoracion"element={<ListaPer/>}/>    
        <Route exact path="/Usuario" element={<Usuario/>}/>
        <Route exact path="/Slider1" element={<Slider1/>}/>
        
       </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App