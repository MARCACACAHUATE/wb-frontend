import React, {useContext} from "react";
import {Button, TextField} from'@material-ui/core';
import { BurstMode } from "@material-ui/icons";
import Form from 'react-bootstrap/Form';
import { multiStepContext } from "../StepContext";
import './steps.css'

const SecondStep= () => {
    const { setStep, userData, setUserData} = useContext(multiStepContext);
    return(
    <div className="conteiner">
        
        <Form.Select aria-label="Default select example">
        <option>Seleccione el curso al que desea inscribirse</option>
        <option value="1">Curso de globos, flores y follaje- GUADALAJARA</option>
        <option value="2">Curso de globos, flores y follaje- SAN LUIS</option>
        <option value="3">Curso de globos, flores y follaje- TAMPICO</option>
        </Form.Select>
        <div>
        <TextField label="Total de personas invitadas" value={userData['personas']} onChange={(e)=>setUserData({...userData, "personas" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Costo total" value={userData['costo']} onChange={(e)=>setUserData({...userData, "costo" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        
        <div>
        <button variant="contained" onClick={() => setStep(1)} color="secondary">Back</button> <span></span>
        <button variant="contained" onClick={() => setStep(3)} color="primary">Next</button>
        </div>
    </div>
    )
}
 
export default SecondStep