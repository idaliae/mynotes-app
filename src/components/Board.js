import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();

    this.state = {
        notes: []
    }
  }

  handleClick() {
    console.log("This is the click!");
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            <Note handleClick={this.handleClick} title="Title One" body="Body One"/>
            <Note title="Title Two" body="Body Two"/>
            <Note title="Title Three" body="Body Three"/>
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

export default Board;