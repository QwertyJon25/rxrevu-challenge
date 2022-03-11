// import './App.css';
import { useState } from "react";

export default function App() {
  const [shown, setShown] = useState("X");
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  const [answer, setAnswer] = useState();

  const clickHandler = (index) => {
    const newGrid = [...grid];
    newGrid[index] = shown;
    setGrid(newGrid);

    if (shown === "X") {
      setShown("O");
    } else {
      setShown("X");
    }
    getWinningState(newGrid);
  };

  const getWinningState = (newGrid) => {
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
        newGrid[s[0]] !== "" &&
        newGrid[s[0]] === newGrid[s[1]] &&
        newGrid[s[1]] === newGrid[s[2]]
      ) {
        setAnswer(newGrid[s[0]]);
      }
    });
  };

  return (
    <div className="App">
      <h1>Occupied Tiles UI</h1>
      <div>
        <span>
          <button onClick={() => clickHandler(0)}>{grid[0]}</button>
          <button onClick={() => clickHandler(1)}>{grid[1]}</button>
          <button onClick={() => clickHandler(2)}>{grid[2]}</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={() => clickHandler(3)}>{grid[3]}</button>
          <button onClick={() => clickHandler(4)}>{grid[4]}</button>
          <button onClick={() => clickHandler(5)}>{grid[5]}</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={() => clickHandler(6)}>{grid[6]}</button>
          <button onClick={() => clickHandler(7)}>{grid[7]}</button>
          <button onClick={() => clickHandler(8)}>{grid[8]}</button>
        </span>
      </div>
      Answer: {answer}
    </div>
  );
}