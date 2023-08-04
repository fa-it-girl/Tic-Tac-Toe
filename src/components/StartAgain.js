import { useState } from "react";


const StartAgain = ({onStartHandler}) => {

  return (
  <button onClick={onStartHandler}>Start again</button>
  )
}

export default StartAgain;
