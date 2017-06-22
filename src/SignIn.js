import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div id="sign-in-div">
      <h1 id="title">Noteherder</h1>
      <button
        className="SignIn"
        onClick={() => authenticate(githubProvider)}
      >
        Sign In With GitHub
      </button>
      <button
        className="SignIn"
        onClick={() => authenticate(googleProvider)}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn