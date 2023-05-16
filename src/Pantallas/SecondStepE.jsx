import React, {useContext} from "react";
import {Button, TextField} from'@material-ui/core';
import { BurstMode } from "@material-ui/icons";

import { multiStepContext } from "../StepContext";
import './steps.css'

const SecondStepE= () => {
    const { setStep, userData, setUserData} = useContext(multiStepContext);
    return(
    <div className="conteiner">
        <div>
        <TextField label="Municipio" value={userData['municipio']} onChange={(e)=>setUserData({...userData, "municipio" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Colonia" value={userData['colonia']} onChange={(e)=>setUserData({...userData, "colonia" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Calle" value={userData['calle']} onChange={(e)=>setUserData({...userData, "calle" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <TextField label="Número de casa" value={userData['número de casa']} onChange={(e)=>setUserData({...userData, "número de casa" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
        <button variant="contained" onClick={() => setStep(1)} color="secondary">Back</button> <span></span>
        <button variant="contained" onClick={() => setStep(3)} color="primary">Next</button>
        </div>
    </div>
    )
}
 
export default SecondStepE