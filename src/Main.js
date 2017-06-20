import React from 'react';

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

import './Main.css'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar resetCurrentNote={props.resetCurrentNote}/>
      <NoteList notes={props.notes} setCurrentNote={props.setCurrentNote}/>
      <NoteForm {...props}/>
    </div>
  );
  
}

export default Main;
