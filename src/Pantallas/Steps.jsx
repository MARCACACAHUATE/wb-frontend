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
        case 2 :
          return <SecondStep/>
          case 3 :
            return <ThirdStep/>
    }
  }
  return(
    <div className='center-stepper'>
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