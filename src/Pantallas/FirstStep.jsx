import React, { useContext, useEffect, useState } from "react";
import { Button, TextField } from '@material-ui/core';
import { BurstMode } from "@material-ui/icons";
import Form from 'react-bootstrap/Form';
import { reqqResapi } from '../api/reqRes';

import { multiStepContext } from "../StepContext";
import './steps.css';

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await reqqResapi.get('api/Cursos');
        console.log(response.data);
        const cursoData = response.data;
        setCursos(cursoData);
      } catch (error) {
        console.error("Error fetching cursos:", error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <div className="conteiner">
      <div>
        <TextField label="Nombre" value={userData['nombre']} onChange={(e) => setUserData({ ...userData, "nombre": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Apellidos" value={userData['apellidos']} onChange={(e) => setUserData({ ...userData, "apellidos": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Edad" value={userData['edad']} onChange={(e) => setUserData({ ...userData, "edad": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Teléfono" value={userData['telefono']} onChange={(e) => setUserData({ ...userData, "telefono": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Correo electrónico" value={userData['correo']} onChange={(e) => setUserData({ ...userData, "correo": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <Form.Select aria-label="Default select example">
        <option>Seleccione el curso al que desea inscribirse</option>
        {cursos.map((curso) => (
          <option key={curso.idCursos} value={curso.idCursos}>
            {curso.nombre} - {curso.estadoCursoName}
          </option>
        ))}
      </Form.Select>
      <div>
        <TextField label="Total de personas invitadas" value={userData['personas']} onChange={(e) => setUserData({ ...userData, "personas": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <Form.Select aria-label="Default select example" value={userData['pagoCompleto']} onChange={(e) => setUserData({ ...userData, "pagoCompleto": e.target.value })}>
          <option>Seleccione el tipo de pago</option>
          <option value={true}>Pago Completo</option>
          <option value={false}>Pago de Reservación</option>
        </Form.Select>
      </div>
      <div>
        <Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button>
      </div>
    </div>
  )
}

export default FirstStep;
