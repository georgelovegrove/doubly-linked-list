import React, { Component } from 'react';

import UserLadder from './ladder/containers/user-ladder';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="page">
          <h2>Doubly Linked List</h2>

          <UserLadder />
        </div>
      </div>
    );
  }
}

export default App;
