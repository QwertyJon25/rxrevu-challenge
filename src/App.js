
import './App.css';
import { useState } from "react";
// Build a React App that lets us play tic-tac-toe

export default function App() {
  const [shown, setShown] = useState("X");
  const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
  const [win, setWin] = useState();

  const clickHandler = (index) => {
    const newGame = [...game];
    newGame[index] = shown;
    setGame(newGame);

    if (shown === "X") {
      setShown("O");
    } else {
      setShown("X");
    }
    getWinningState(newGame);
  };

  const getWinningState = (newGame) => {
    const winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winningStates.forEach((s) => {
      if (
        newGame[s[0]] !== "" &&
        newGame[s[0]] === newGame[s[1]] &&
        newGame[s[1]] === newGame[s[2]]
      ) {
        setWin(newGame[s[0]]);
      }
    });
  };

  return (
    <div className="App">
      <h1>Tic-tac-toe</h1>
      <div>
        <span>
          <button onClick={() => clickHandler(0)}>{game[0]}</button>
          <button onClick={() => clickHandler(1)}>{game[1]}</button>
          <button onClick={() => clickHandler(2)}>{game[2]}</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={() => clickHandler(3)}>{game[3]}</button>
          <button onClick={() => clickHandler(4)}>{game[4]}</button>
          <button onClick={() => clickHandler(5)}>{game[5]}</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={() => clickHandler(6)}>{game[6]}</button>
          <button onClick={() => clickHandler(7)}>{game[7]}</button>
          <button onClick={() => clickHandler(8)}>{game[8]}</button>
        </span>
      </div>
      Winner: {win}
    </div>
  );
}