import React, {useContext} from "react";
import {Stepper, StepLabel, Step} from '@material-ui/core';
import { multiStepContext } from './../StepContext';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';



const Steps = () => {

    const { currentStep, finalData}  = useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1 :
        return <FirstStep/>
          case 3 :
            return <ThirdStep/>
            
    }
  }

  return( 
    
    <div className='center-stepper'>
      <h1> Da el primer paso, ¡Inscríbete a uno de nuestros cursos!</h1>
    <Stepper style={{width:'18%'}} activeStep={currentStep - 1} orientation='horizontal'>
      <Step>
        <StepLabel></StepLabel>
      </Step>
      <Step>
      <StepLabel></StepLabel>
      </Step>
      <Step>
      <StepLabel></StepLabel>
      </Step>
    </Stepper>
  
  {showStep(currentStep)}
  </div>

  )
   
}

export default Steps