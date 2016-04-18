import React from 'react';
import ReactDOM from 'react-dom';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import helpers from '../utils/helpers';

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Newt Scamander'
      },
      repos: ['a', 'b', 'c']
    };
  },
  componentDidMount: function() {
    this.init(this.props.params.username);
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  componentWillReceiveProps: function(nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  init: function(username) {
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');
    helpers.getGithubInfo(username).then((data) => {
      this.setState({
        bio: data.bio,
        repos: data.repos
      })
    });
  },
  addNote: function(newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.addNote}/>
        </div>
      </div>
    );
  }
});

export default Profile;
