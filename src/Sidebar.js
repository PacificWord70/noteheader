import React from 'react'
import quill from './quill.svg'
import newHoverPNG from './new-hover.png'
import newPNG from './new.png'
import SignOut from './SignOut'

import './Sidebar.css'

const Sidebar = ({ resetCurrentNote, signOut }) => {
    return (
        <nav className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>
            <button className="new-note" onClick={resetCurrentNote}>
                <img src={newHoverPNG} alt="New note" />
                <img className="outline" src={newPNG} alt="New note" />
            </button>
            <SignOut signOut={signOut}/>  
        </nav>
    )
}

export default Sidebar