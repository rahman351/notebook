import './ShowNotes.css'

const ShowNotes = (props) => {
    return ( 
        <div className="shownote-parent">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet"/>
            {props.notes.map(current =>
                <div className="note-container" style={{backgroundColor: current.color}}>
                    <div className="note-title"><b>{current.title}</b></div>
                    <div className="note-content">{current.content}</div>
                </div>
            )}
        </div>
    );
}
 
export default ShowNotes;