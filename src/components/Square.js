import React, { useState } from 'react';
import './Square.css';

const Square = ({ value, onSquareClick}) => {
  // const [click, setClick] = useState(null);

  // const handleClick =() => {
  //   setClick('X')
  // }
  return (
    <button
       className="square"
      onClick ={ onSquareClick}
    >
     {value}
    </button>
  );
};

export default Square;
