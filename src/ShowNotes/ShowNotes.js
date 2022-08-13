import './ShowNotes.css'

const ShowNotes = (props) => {
    return ( 
        <div className="shownote-parent">
            {props.notes.map(current =>
                <div className="note-container" style={{backgroundColor: current.color}}>
                    <div className="note-title">{current.title}</div>
                    <div className="note-content">{current.content}</div>
                </div>
            )}
        </div>
    );
}
 
export default ShowNotes;