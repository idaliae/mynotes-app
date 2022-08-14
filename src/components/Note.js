import React, {Component} from 'react';
import '../css/Note.css';

class Note extends Component {
  constructor() {
    super();
  }

  render() {

    // let titleElement, bodyElement, buttonArea;
    // if (this.state.editMode) {
    //   titleElement = <textarea ref ={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
    // }

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">Note Title</h5>
            <p>This is a very long note that we just made up</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;