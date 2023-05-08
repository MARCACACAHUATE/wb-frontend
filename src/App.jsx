import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Inicio from "./Pantallas/Inicio"
import Cursos from "./Pantallas/Cursos"
import Eventos from "./Pantallas/Eventos"
import Usuario from "./Pantallas/Usuario"
import Navbar from "./Componentes/Navbar"

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Cursos />
      <Eventos />
      
      
    </div>
  )
}

export default App