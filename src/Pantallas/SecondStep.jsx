import React, {useContext} from "react";
import {Button, TextField} from'@material-ui/core';
import { BurstMode } from "@material-ui/icons";

import { multiStepContext } from "../StepContext";


const SecondStep= () => {
    const { setStep, userData, setUserData} = useContext(multiStepContext);
    return(
    <div>
        <div>
        <TextField label="Curso" value={userData['curso']} onChange={(e)=>setUserData({...userData, "curso" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Dirección del curso" value={userData['direccion']} onChange={(e)=>setUserData({...userData, "direccion" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Fechas programadas" value={userData['fechas']} onChange={(e)=>setUserData({...userData, "fechas" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <button variant="contained" onClick={() => setStep(1)} color="secondary">Back</button> <span></span>
        <button variant="contained" onClick={() => setStep(3)} color="primary">Next</button>
        </div>
    </div>
    )
}
 
export default SecondStep