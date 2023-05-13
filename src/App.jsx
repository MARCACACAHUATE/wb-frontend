

import Inicio from "./Pantallas/Inicio"
import Cursos from "./Pantallas/Cursos"
import Eventos from "./Pantallas/Eventos"
import Navbar from "./Componentes/Navbar"
import ListaPer from './Pantallas/PersonalizarE'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Cursos />
      <Eventos />
      <ListaPer />
    </div>
  )
}

export default App