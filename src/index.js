import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// class Sep extends React.Component {
//     render() {
//       return (
//         <div className="sep">
//           {/* TODO */}
//         </div>
//       );
//     }
// }


  class Board extends React.Component {


      handleClick(i) {
        const squares = this.props.squares.slice();
        if (calculateWinner(squares) || squares[i]) return;
        squares[i] = props.xIsNext ? 'X' : 'O';
        this.setState({squares: squares, xIsNext: !this.props.xIsNext});
    }

    renderSquare(i) {
      return <Square
               valeur={this.props.squares[i]}
               onClick={() => this.props.onClick(i)} // !! don't forget () => 
      />;
    }
    // renderSep() {
    //     return <div className="sep"/>;
    // }



    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
      }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            <div className="sep"/>            
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            <div className="sep"/>
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            <div className="sep"/>
          </div>
        </div>
      );
    }
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
  