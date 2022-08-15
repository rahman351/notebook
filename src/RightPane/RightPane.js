import './RightPane.css'
import AddNote from '../AddNote/AddNote';
import ShowNotes from '../ShowNotes/ShowNotes';
import { useState } from 'react';

const RightPane = (props) => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notebook")).data);
    return (  
        <div className="right-main">
            <div className="right-top">
                <AddNote setNotes={setNotes}/>
            </div>
            <div className="right-bottom">
                <ShowNotes notes={notes} tag={props.tag}/>
            </div>
        </div>
    );
}
 
export default RightPane;