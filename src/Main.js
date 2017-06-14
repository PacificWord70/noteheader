import React, { Component } from 'react';

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Sidebar />
        <NoteList />
        <NoteForm />
      </div>
    );
  }
}

export default Main;
