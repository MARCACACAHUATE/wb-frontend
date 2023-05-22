import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { reqqResapi } from '../api/reqRes';
import { useLocation } from 'react-router-dom';


const adminModificarCurso = () => {
  const navigate = useNavigate();
const { id } = useParams();
    //const decodedId = decodeURIComponent(id);
    //const location = useLocation();
    //const cursoId = location.state?.cursoId;

  const { register, setValue } = useForm();

  const [curso, setCurso] = useState({
    nombre: '',
    tematica: '',
    detalle: '',
    fechaInicio: '',
    fechaFin: '',
    costoReservacion: '',
    costoTotal: '',
    calle: '',
    numero: '',
    municipio: '',
    estadoCursoName: '',
  });

  const [estadoCursos, setEstadoCursos] = useState([
    { id: '1', nombre: '' },
    { id: '2', nombre: 'Nuevo León' },
    { id: '3', nombre: 'Otro estado' },
  ]);

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await reqqResapi.get(`api/Cursos/${id}`);
        console.log(response.data);
        const cursoData = response.data;
        // Transformar las fechas al formato adecuado
        const formattedFechaInicio = new Date(cursoData.fechaInicio).toISOString().slice(0, 16);
        const formattedFechaFin = new Date(cursoData.fechaFin).toISOString().slice(0, 16);
        
        setCurso({
            ...cursoData,
            fechaInicio: formattedFechaInicio,
            fechaFin: formattedFechaFin
          });

        // Establecer los valores del formulario con la información del curso a modificar
        Object.keys(cursoData).forEach((key) => {
          setValue(key, cursoData[key]);
        });
      } catch (error) {
        console.error('Error al obtener el curso:', error);
      }
    };

    fetchCurso();
  }, [id, setValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'FechaInicio' || name === 'FechaFin') {
      const date = new Date(value);
      const utcDate = new Date(date.toISOString());
      const formattedDate = utcDate.toISOString().slice(0, 16);
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
    try {
      const response = await reqqResapi.put(`api/Cursos/${id}`, curso);
      if (response.status === 204) {
        // El curso se ha actualizado correctamente
        console.log('Curso actualizado:', curso);
        navigate('/admin/adminCursos');
      } else {
        console.error('Error al actualizar el curso:', response.status);
      }
    } catch (error) {
      console.error('Error al actualizar el curso:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="nombre" style={{ marginBottom: '10px' }}>
        Nombre del curso:
      </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={curso.nombre}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

<label htmlFor="tematica" style={{ marginBottom: '10px' }}>
        Temática del curso:
      </label>
      <input
        type="text"
        id="tematica"
        name="tematica"
        value={curso.tematica}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="detalle" style={{ marginBottom: '10px' }}>
        Detalle del curso:
      </label>
      <textarea
        id="detalle"
        name="detalle"
        value={curso.detalle}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      ></textarea>

      <label htmlFor="fechaInicio" style={{ marginBottom: '10px' }}>
      Fecha y hora de inicio del curso:
      </label>
      <input
        type="datetime-local"
        id="fechaInicio"
        name="fechaInicio"
        value={curso.fechaInicio}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
    />

    <label htmlFor="fechaFin" style={{ marginBottom: '10px' }}>
      Fecha y hora de finalización del curso:
    </label>
      <input
        type="datetime-local"
        id="fechaFin"
        name="fechaFin"
        value={curso.fechaFin}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
    />

      <label htmlFor="costoReservacion" style={{ marginBottom: '10px' }}>
        Costo para reservar el curso:
      </label>
      <input
        type="text"
        id="costoReservacion"
        name="costoReservacion"
        pattern="[0-9]+"
        value={curso.costoReservacion}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="costoTotal" style={{ marginBottom: '10px' }}>
        Costo total del curso:
      </label>
      <input
        type="text"
        id="costoTotal"
        name="costoTotal"
        pattern="[0-9]+"
        value={curso.costoTotal}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="calle" style={{ marginBottom: '10px' }}>
        Calle donde se llevará a cabo el curso:
      </label>
      <input
        type="text"
        id="calle"
        name="calle"
        value={curso.calle}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="numero" style={{ marginBottom: '10px' }}>
        Número donde se llevará a cabo el curso:
      </label>
      <input
        type="text"
        id="numero"
        name="numero"
        pattern="[0-9]+"
        value={curso.numero}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="municipio" style={{ marginBottom: '10px' }}>
        Municipio donde se llevará a cabo el curso:
      </label>
      <input
        type="text"
        id="municipio"
        name="municipio"
        value={curso.municipio}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <label htmlFor="estadoCursoName" style={{ marginBottom: '10px' }}>
        Estado donde se llevará a cabo el curso:
      </label>
      <select
        id="estadoCursoName"
        name="estadoCursoName"
        value={curso.estadoCursoName}
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

export default adminModificarCurso;
