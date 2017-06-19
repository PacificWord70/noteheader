import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {

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
        <Main />
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
