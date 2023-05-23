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

    const handleCursoSelection = (event) => {
      const cursoId = event.target.value;
      setUserData({ ...userData, "CursosIdCursos": cursoId });
      console.log(userData)
    };

  const saveUserData = async () => {
    try {
      const updatedUserData = {
        ...userData,
        Cantidad_personas_contratadas: parseInt(userData.Cantidad_personas_contratadas),
        Edad: parseInt(userData.Edad),
        CursosIdCursos: (userData.CursosIdCursos),
      };
      console.log(updatedUserData);
      const response = await reqqResapi.post('api/CursoSeparacion', updatedUserData);
      console.log(response.data);
      // Cualquier acción adicional después de guardar los datos en la base de datos
      setStep(2); // Pasar al siguiente paso
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <div className="conteiner">
      <div>
        <TextField label="Nombre" value={userData['First_name']} onChange={(e) => setUserData({ ...userData, "First_name": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Apellidos" value={userData['Last_name']} onChange={(e) => setUserData({ ...userData, "Last_name": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Edad" value={userData['Edad']} onChange={(e) => setUserData({ ...userData, "Edad": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Teléfono" value={userData['Telefono']} onChange={(e) => setUserData({ ...userData, "Telefono": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Correo electrónico" value={userData['Email']} onChange={(e) => setUserData({ ...userData, "Email": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <Form.Select aria-label="Default select example" onChange={handleCursoSelection}>
        <option>Seleccione el curso al que desea inscribirse</option>
        {cursos.map((curso) => (
          <option key={curso.idCursos} value={curso.idCursos}>
            {curso.nombre} - {curso.estadoCursoName}
          </option>
        ))}
      </Form.Select>
      <div>
        <TextField label="Total de personas invitadas" value={userData['Cantidad_personas_contratadas']} onChange={(e) => setUserData({ ...userData, "Cantidad_personas_contratadas": e.target.value })} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <Form.Select aria-label="Default select example" value={userData['TipoPago']} onChange={(e) => setUserData({ ...userData, "TipoPago": e.target.value === "true" })}>
          <option>Seleccione el tipo de pago</option>
          <option value="true">Pago Completo</option>
          <option value="false">Pago de Reservación</option>
        </Form.Select>
      </div>
      <div>
        <Button variant="contained" onClick={saveUserData} color="primary">Next</Button>
      </div>
    </div>
  );
};

export default FirstStep;
