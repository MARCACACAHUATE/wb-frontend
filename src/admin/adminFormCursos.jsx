import React, { useState } from 'react';
import { createBrowserHistory } from 'history';
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";


const CursoForm = () => {
  const navigate = useNavigate();  // Obtener la función de navegación

  const [curso, setCurso] = useState({
    Nombre: '',
    Tematica: '',
    Detalle: '',
    FechaInicio: '',
    FechaFin: '',
    CostoReservacion: '',
    CostoTotal: '',
    Calle: '',
    Numero: '',
    Municipio: '',
    EstadoCursoName: '' 
  });

  const [estadoCursos, setEstadoCursos] = useState([
    { id: '1', nombre: '' },
    { id: '2', nombre: 'Nuevo León' },  
    { id: '3', nombre: 'Otro estado' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'FechaInicio' || name === 'FechaFin') {
      const date = new Date(value);
      const utcDate = new Date(date.toISOString()); // Convertir a UTC
      const formattedDate = utcDate.toISOString().slice(0, 16); // Formato yyyy-MM-ddThh:mm
      setCurso((prevCurso) => ({ ...prevCurso, [name]: formattedDate }));

      } else if (name === 'EstadoCursoName') {
      const estadoSeleccionado = estadoCursos.find((estado) => estado.nombre === value);
      if (estadoSeleccionado) {
        setCurso((prevCurso) => ({ ...prevCurso, [name]: estadoSeleccionado.nombre }));
      } else {
        setCurso((prevCurso) => ({ ...prevCurso, [name]: '' }));
      } 

      } else {
      setCurso((prevCurso) => ({ ...prevCurso, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Acciones para registrar el curso en la base de datos
    try {
      // Realizar la solicitud POST al backend para crear el curso
      console.log(curso);
      const response = await reqqResapi.post('api/Cursos/', curso);
  
      if (response.ok) {
        // El curso se ha creado correctamente
        console.log('Curso creado:', curso);
  
        // Redireccionamos a la interfaz adminCursos
        navigate('/admin/adminCursos');
      } else {
        // Hubo un error al crear el curso
        console.error('Error al crear el curso:', response.status);
        // No se por que se va a este apartado pero envía la solicitud al post bien
        navigate('/admin/adminCursos');
      }
    } catch (error) {
      console.error('Error al crear el curso:', error);
    }

    console.log(curso);
    setCurso({
      Nombre: '',
      Tematica: '',
      Detalle: '',
      FechaInicio: '',
      FechaFin: '',
      CostoReservacion: '',
      CostoTotal: '',
      Calle: '',
      Numero: '',
      Municipio: '',
      EstadoCursoName: ''
    });

    // Redireccionamos a la interfaz adminCursos
    navigate('/admin/adminCursos');

  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="Nombre" style={{ marginBottom: '10px' }}>
        Nombre del curso:
      </label>
      <input
        type="text"
        id="Nombre"
        name="Nombre"
        value={curso.Nombre}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="Tematica" style={{ marginBottom: '10px' }}>
        Temática del curso:
      </label>
      <input
        type="text"
        id="Tematica"
        name="Tematica"
        value={curso.Tematica}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="Detalle" style={{ marginBottom: '10px' }}>
        Detalle del curso:
      </label>
      <textarea
        id="Detalle"
        name="Detalle"
        value={curso.Detalle}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      ></textarea>

      <label htmlFor="FechaInicio" style={{ marginBottom: '10px' }}>
      Fecha y hora de inicio del curso:
      </label>
      <input
        type="datetime-local"
        id="FechaInicio"
        name="FechaInicio"
        value={curso.FechaInicio}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
    />

    <label htmlFor="FechaFin" style={{ marginBottom: '10px' }}>
      Fecha y hora de finalización del curso:
    </label>
      <input
        type="datetime-local"
        id="FechaFin"
        name="FechaFin"
        value={curso.FechaFin}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
    />

      <label htmlFor="CostoReservacion" style={{ marginBottom: '10px' }}>
        Costo para reservar el curso:
      </label>
      <input
        type="text"
        id="CostoReservacion"
        name="CostoReservacion"
        pattern="[0-9]+"
        value={curso.CostoReservacion}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="CostoTotal" style={{ marginBottom: '10px' }}>
        Costo total del curso:
      </label>
      <input
        type="text"
        id="CostoTotal"
        name="CostoTotal"
        pattern="[0-9]+"
        value={curso.CostoTotal}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="Calle" style={{ marginBottom: '10px' }}>
        Calle donde se llevará a cabo el curso:
      </label>
      <input
        type="text"
        id="Calle"
        name="Calle"
        value={curso.Calle}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="Numero" style={{ marginBottom: '10px' }}>
        Número donde se llevará a cabo el curso:
      </label>
      <input
        type="text"
        id="Numero"
        name="Numero"
        pattern="[0-9]+"
        value={curso.Numero}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="Municipio" style={{ marginBottom: '10px' }}>
        Municipio donde se llevará a cabo el curso:
      </label>
      <input
        type="text"
        id="Municipio"
        name="Municipio"
        value={curso.Municipio}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="EstadoCursoName" style={{ marginBottom: '10px' }}>
        Estado donde se llevará a cabo el curso:
      </label>
      <select
        id="EstadoCursoName"
        name="EstadoCursoName"
        value={curso.EstadoCursoName}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      >
        {estadoCursos.map((estado, index) => (
          <option key={index} value={estado.nombre}>
            {estado.nombre}
          </option>
        ))}
      </select>

      <button type="submit" style={{ backgroundColor: 'purple', color: 'white', padding: '10px 20px' }}>
        Enviar
      </button>
    </form>
  );
};

export default CursoForm;
