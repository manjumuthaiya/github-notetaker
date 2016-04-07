import React from 'react';
import ReactDOM from 'react-dom';

class AddNote extends React.Component {
  constructor() {
    super();
  }

  setRef(ref) {
    this.note = ref;
  }

  handleSubmit() {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  }

  render() {
    return(
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add new note" ref={this.setRef.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    );
  }

}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;