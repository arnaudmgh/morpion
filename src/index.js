import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    render() {
      return (
        <button
          className="square"
          onClick={ () => this.props.onClick() }
        >
          {this.props.valeur}
        </button>
      );
    }
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
              squares: Array(9).fill(null),
          }
      }

      handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
      return <Square
               valeur={this.state.squares[i]}
               onClick={this.handleClick(i)}
      />;
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
  