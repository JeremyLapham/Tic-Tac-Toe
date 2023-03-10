import React, { useState } from "react";
import Square from '../squaresComponent/squareComponent';
import swal from 'sweetalert';
import Ryu from './assets/ryu.png';
import Akuma from './assets/akuma.png';
import ryuHit from '../squaresComponent/assets/ryupunch.mp3';
import akumaHit from '../squaresComponent/assets/akumapunch.mp3';
import winner from './assets/win.wav';


export default function Board({ xIsNext, squares, onPlay }) {
  const [ryuImage, setRyuImage] = useState(Ryu)
  const [akumaImage, setAkumaImage] = useState(Akuma);

  function play() {
    new Audio(ryuHit).play();
  }
  function playTwo() {
    new Audio(akumaHit).play();
  }
    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = ryuImage;
        play();
      } else {
        nextSquares[i] = akumaImage;
        playTwo();
      }
      onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner === ryuImage) {
      status = 'Winner: Ryu';

      swal({
        text: "Ryu Wins!",
        icon: Ryu,
      });
    } else if(winner === akumaImage) {
      status = 'Winner: Akuma';
      swal({
        text: "Akuma Wins!",
        icon: Akuma,
      });
    } else {
      status = 'Next player: ' + (xIsNext ? 'Ryu' : 'Akuma');
    }
    return (
      <div>
        <div className='titleTxt'>{status}</div>
        <div className='board-row'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className='board-row'>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className='board-row'>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        function win() {
          new Audio(winner).play();
        }
        win()
        return squares[a];
      }
    }
    return null;
  }