import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.valeur}
    </button>
  );
}


function Board(props) {
  const [state, setState] = useState()

    function  handleClick(i) {
        const squares = props.squares.slice();
        if (calculateWinner(squares) || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';
        setState({squares: squares, xIsNext: !props.xIsNext});
    }

     function renderSquare(i) {
      return <Square
               valeur={props.squares[i]}
               onClick={() => props.onClick(i)} // !! don't forget () => 
      />;
    }
    // renderSep() {
    //     return <div className="sep"/>;
    // }
  
      const winner = calculateWinner(props.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = `Next player: ${props.xIsNext ? 'X' : 'O'}`;
      }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            <div className="sep"/>            
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            <div className="sep"/>
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            <div className="sep"/>
          </div>
        </div>
      );
  }
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
      }
    } 

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board squares={this.state.squares}
            onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
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
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  