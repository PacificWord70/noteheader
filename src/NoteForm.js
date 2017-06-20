import React, {Component} from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    handleChanges(ev) {
        console.log(ev.target.value)
    }

    render(){
        return (
            <div className="NoteForm">
                <form>
                    <p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Title your note" 
                            onChange={this.handleChanges}
                        />
                    </p>
                    <p>
                        <textarea 
                            name="body" 
                            placeholder="Just start typing..."
                            onChange={this.handleChanges}
                        ></textarea>
                    </p>
                </form>
            </div>
        )
    }
}

export default NoteForm