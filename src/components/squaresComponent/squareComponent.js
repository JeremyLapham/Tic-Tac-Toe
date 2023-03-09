import React from "react";

export default function Square({ value, onSquareClick }) {
    return <button onClick={onSquareClick} className="square"><img src={value} alt=''/></button>;
  }