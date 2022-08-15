import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();

    this.state = {
        notes: [
            {
              title: "Class Notes",
              body: "Always use constructors when extending another class"
            },
            {
              title: "My New Address",
              body: "2001 N Lonhill Phoenix, AZ 81234"
            },
            {
              title: "React Notes",
              body: "Everything in React is a component"
            }
          ]
    }
  }

  addNote() {
    let notes = this.state.notes;
    notes.push(
        {
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

  handleClick() {
    console.log("This is the click!");
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map(note => {
                return <Note title={note.title} body={note.body} />
            })}
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Board;