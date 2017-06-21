import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Main from './Main'
import base, {auth} from './base'
import SignIn from './SignIn'

class App extends Component {

  constructor(){
    super()

    this.state = {
      notes: {},
      uid: null,
      currentNote: this.blankNote(),
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if(user){
          this.authHandler(user)
        } else {
          this.setState({uid: null})
        }
      }
    )
  }

  syncNotes = () => {
    this.ref = base.syncState(
      `notes/${this.state.uid}`,
      {
        context: this,
        state: 'notes',
      }
    )
  }

  blankNote = () => {
      return {
          id: null,
          title: '',
          body: '',
      }
  }

  saveNote = (note) => {
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes, currentNote: note })
  }

  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null
      this.resetCurrentNote()
    this.setState({notes})
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  signedIn = () => {
    return this.state.uid
  } 

  authHandler = (user) => {
    this.setState(
      {uid: user.uid},
      this.syncNotes
    )
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => {
        base.removeBinding(this.ref)
        this.setState({
          notes: {},
          currentNote: this.blankNote()
        })
      })
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  render() {
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      signOut: this.signOut,
    }

    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/notes" render={()=>(
            <Main {...noteData} {...actions}/>
          )}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route render={()=> <Redirect to="/notes"/>}/>
        </Switch>
      </div>
    )
  }
}


export default App;
