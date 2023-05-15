import React, {useContext} from "react";
import {Button, TextField} from '@material-ui/core';
import { BurstMode } from "@material-ui/icons";
import { multiStepContext } from "../StepContext";



const ThirdStep= () => {
    const { setStep, userData, setUserData, submitData} = useContext(multiStepContext);
    return(
    <div>
        <div>
        <TextField label="Número de la tarjeta" value={userData['tarjeta']} onChange={(e)=>setUserData({...userData, "tarjeta" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Fecha de expiración" value={userData['expiracion']} onChange={(e)=>setUserData({...userData, "expiracion" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="CVV" margin="normal" value={userData['cvv']} onChange={(e)=>setUserData({...userData, "cvv" : e.target.value})} variant="outlined" color="secondary"/>
        </div>
        <div>
        <button variant="contained" onClick={() => setStep(2)} color="secondary">Back</button> <span></span>
        <button variant="contained" onClick={submitData} color="primary">Aceptar</button>
        </div>
    </div>
    )
}
 
export default ThirdStep