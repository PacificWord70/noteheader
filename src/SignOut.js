import React from 'react'
import './SignOut.css'

const SignOut = ({signOut}) => {
  return (
    <div class="signOut">
      <button onClick={signOut}>
          <i class="fa fa-sign-out">Sign Out</i>
      </button>
    </div>
  )
}

export default SignOut