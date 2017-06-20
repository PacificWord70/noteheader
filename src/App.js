import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {

  constructor(){
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'Thoughts on React',
          body: 'React is cool'
        },
        'note-2': {
          id: 'note-2',
          title: 'Thoughts on JS',
          body: 'Js is awesome'
        },
      },
    }
  }

  saveNote(note){
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  signedIn = () => {
  return this.state.uid
  } 

  authHandler = (user) => {
    this.setState({uid: user.id})
  }

  signOut = () => {
    this.setState({uid:null})
  }

  renderMain(){
    return (
      <div>
        <SignOut signOut={this.signOut}/>
        <Main notes={this.state.notes}/>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signedIn ? this.renderMain() : <SignIn authHandler={this.authHandler}/> }
      </div>
    )
  }
}


export default App;
