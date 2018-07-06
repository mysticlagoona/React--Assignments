import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class Cell extends React.Component {
constructor(props){
    super(props);
}
  render() {
    return <button className="cell" onClick={this.props.onClick}>
    {this.props.value}
    </button>;
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: new Array(9).fill(null)
    };
  }
  renderCell(i) {
    return <Cell value={this.state.cells[i]} 
    onClick={() => this.handleClick(i)}
    />;
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    console.log('cells value : '+ cells);
    if(cells.length === 8 ) {
      this.setState ( {gameOver : true});
    } else {
        if (calculateWinner(cells) || cells[i]) {
          return;
        }
        cells[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          cells: cells,
          xIsNext: !this.state.xIsNext,
        });
      }
  }

  render() {
    const winner = calculateWinner(this.state.cells);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className="board-row">
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className="board-row">
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: new Array(9).fill(null),
      xIsNext: true,
      gameOver: false,
    };
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          {this.state.gameOver ? <h4>Game Over</h4> : null}
          <Board cells={this.state.cells} />
          
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(cells) {
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
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }