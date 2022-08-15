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

  addNote = () => {
    let notes = this.state.notes;
    notes.push(
        {
            id: Date.now(),
            title: "New Note Title",
            body: "New Note Body"
        }
    );
    this.setState(
        {
            notes
        }
    );
  }

  deleteNote = (id) => {
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
        if (id === note.id) {
            newNoteArr.splice(index, 1);
        }
    });
    this.setState(
        {
            notes: newNoteArr
        }
    );
  }

  handleClick() {
    console.log("This is the click!");
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map(note => {
                return <Note key={note.id} id={note.id} deleteHandler={this.deleteNote} />
            })}
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote}>Add</button>
        </div>
      </div>
    );
  }
}

export default Board;