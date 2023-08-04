import { useState } from "react";
import './Square.css'

const StartAgain = ({onStartHandler}) => {

  return (
  <button className='start-again' onClick={onStartHandler}>Start again</button>
  )
}

export default StartAgain;
