import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        val: null,
        valeur: this.props.valeur,
    }
}

    render() {
      return (
        <button
          className="square"
          onClick={ () => { this.setState({val: this.state.valeur}); } }
        >
          {this.state.val}
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
      constructor(props){
          super(props);
          this.state = {
              //squares: Array(9).fill(null),
              squares: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          }
      }

    renderSquare(i) {
      return <Square valeur={this.state.squares[i]} />;
    }
    // renderSep() {
    //     return <div className="sep"/>;
    // }

    render() {
      const status = 'Next Player: X';
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
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  