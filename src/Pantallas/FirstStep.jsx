import React, {useContext} from "react";
import {Button, TextField} from '@material-ui/core';
import { BurstMode } from "@material-ui/icons";

import { multiStepContext } from "../StepContext";
import './steps.css'



const FirstStep= () => {
   
    const { setStep, userData, setUserData} = useContext(multiStepContext);
    return(
    <div className="conteiner">
        
        <div>
        <TextField label="Nombre" value={userData['nombre']} onChange={(e)=>setUserData({...userData, "nombre" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Apellidos" value={userData['apellidos']} onChange={(e)=>setUserData({...userData, "apellidos" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Edad" value={userData['edad']} onChange={(e)=>setUserData({...userData, "edad" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Teléfono" value={userData['telefono']} onChange={(e)=>setUserData({...userData, "telefono" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Correo electónico" value={userData['correo']} onChange={(e)=>setUserData({...userData, "correo" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <button variant="contained" onClick={() => setStep(2)} color="primary">Next</button>
        </div>
    </div>
    
    )
}

   
export default FirstStep