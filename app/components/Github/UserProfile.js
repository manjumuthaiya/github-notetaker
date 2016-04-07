import React from 'react';
import ReactDOM from 'react-dom';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> USER ! </p>
        <p> Username: {this.props.username} </p>
        <p> Bio: {this.props.bio.name} </p>
      </div>
    )
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;