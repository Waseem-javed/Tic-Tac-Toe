import React from "react";
import Button from "../../../../components/Button";

const Board = () => {
  const [isNextTurn, setIsNextTurn] = React.useState<Boolean>(true);
  const [squares, setSquares] = React.useState<Array<null | string>>(
    Array(9).fill(null)
  );

  const calculateWinner = (squares: any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = [...squares];
    if (isNextTurn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsNextTurn(!isNextTurn);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isNextTurn ? "X" : "O");
  }

  const restartHandler = () => {
    setIsNextTurn(true);
    setSquares(Array(9).fill(null)); // Reset the squares array
    status = "";
  };

  return (
    <div className="card is-centered">
      <div className="card-content">
        <div className="columns is-mobile is-multiline">
          <div className="column is-one-third">
            <Button value={squares[0]} handleClick={() => handleClick(0)} />
            <Button value={squares[1]} handleClick={() => handleClick(1)} />
            <Button value={squares[2]} handleClick={() => handleClick(2)} />
          </div>
          <div className="column is-one-third">
            <Button value={squares[3]} handleClick={() => handleClick(3)} />
            <Button value={squares[4]} handleClick={() => handleClick(4)} />
            <Button value={squares[5]} handleClick={() => handleClick(5)} />
          </div>
          <div className="column is-one-third">
            <Button value={squares[6]} handleClick={() => handleClick(6)} />
            <Button value={squares[7]} handleClick={() => handleClick(7)} />
            <Button value={squares[8]} handleClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <span className="card-footer-item">
          <h4 className="has-text-centered">{status}</h4>
        </span>
        <span className="card-footer-item">
          <button
            className="card-footer-item button is-light is-small"
            onClick={restartHandler}
          >
            Restart
          </button>
        </span>
      </div>
    </div>
  );
};

export default Board;
