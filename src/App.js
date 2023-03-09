import React from "react";
import Game from './components/gameComponent/gameComponent'


export default function App() {
  return (
    <div className='gameBackground'>
      <h1 className='titleTxt'>Tic Tac Toes</h1>
      <Game />
    </div>
  );
}


