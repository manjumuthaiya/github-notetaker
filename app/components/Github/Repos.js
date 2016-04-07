import React from 'react';
import ReactDOM from 'react-dom';

class Repos extends React.Component {
  render() {
    return (
      <div>
        <p> REPOS </p>
        <p> {this.props.repos} </p>
      </div>
    )
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;