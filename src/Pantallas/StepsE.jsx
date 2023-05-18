import React, {useContext} from "react";
import {Stepper, StepLabel, Step} from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import FirstStepE from "./FirstStepE";
import SecondStepE from "./SecondStepE";
import ThirdStepE from "./ThirdStepE";

const StepsE = () => {
    const { currentStep, finalData}  = useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1 :
        return <FirstStepE/>
        case 2 :
          return <SecondStepE/>
          case 3 :
            return <ThirdStepE/>
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

export default StepsE