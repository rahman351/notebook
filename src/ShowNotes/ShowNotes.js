import './ShowNotes.css'
import {deleteNote} from './ShowNoteUtil'

const ShowNotes = (props) => {
    let displayNotes = props.notes;
    
    if(props.tag != "All"){
        displayNotes= displayNotes.filter(currentNote=>currentNote.tag == props.tag)
    }
    let emptyNotes = displayNotes.length==0;
    return ( 
        <div className="shownote-parent">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" rel="stylesheet"/>
            {displayNotes.map(current =>
                <div className="note-container" style={{backgroundColor: current.color}}>
                    <div className="note-title"><b>{current.title}</b></div>
                    <div className="note-content">{current.content}</div>
                    <div className="note-content">Tag : {current.tag}</div>
                    <button className="delete-note" onClick={()=>{deleteNote(current.id)}}>Delete</button>
                </div>
            )}
            { 
                emptyNotes && 
                    <div className="empty-note-message"> No notes present for the tag: {props.tag}</div>
            }
        </div>
    );
}
 
export default ShowNotes;