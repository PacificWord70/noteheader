import React from 'react'

import './SignIn.css'
import quill from './quill.svg'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="">
      <div className="logo">
        
      <h1 id="title"><img src={quill} alt="Noteherder" /> Noteherder</h1>
      </div>
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