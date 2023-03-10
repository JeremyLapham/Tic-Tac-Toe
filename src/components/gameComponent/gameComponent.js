import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Board from '../boardComponent/boardComponent';
import MusicPlayer from '../musicComponent/musicComponent'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Clear Board';
    }
    return (
      <div key={move}>
        <button className='desButton' onClick={() => jumpTo(move)}>{description}</button>
      </div>
    );
  });
  return (
    <Container>
      <MusicPlayer />
      <Row>
        <Col lg={8}>
          <div className='game-board game'>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
        </Col>
        <Col lg={4} className='d-flex justify-content-center'>
          <div className='timeTravel timeBG'>{moves}</div>
        </Col>
      </Row>
    </Container>
  );
}