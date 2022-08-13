import './RightPane.css'
import AddNote from '../AddNote/AddNote';
import ShowNotes from '../ShowNotes/ShowNotes';
import { useState } from 'react';

const RightPane = () => {
    const [notes, setNotes] = useState([{"title":"title is 0","content":"content is 0"},{"title":"title is 1","content":"content is 1"},{"title":"title is 2","content":"content is 2"},{"title":"title is 3","content":"content is 3"},{"title":"title is 4","content":"content is 4"},{"title":"title is 5","content":"content is 5"},{"title":"title is 6","content":"content is 6"},{"title":"title is 7","content":"content is 7"},{"title":"title is 8","content":"content is 8"},{"title":"title is 9","content":"content is 9"},{"title":"title is 10","content":"content is 10"},{"title":"title is 11","content":"content is 11"},{"title":"title is 12","content":"content is 12"},{"title":"title is 13","content":"content is 13"},{"title":"title is 14","content":"content is 14"},{"title":"title is 15","content":"content is 15"},{"title":"title is 16","content":"content is 16"},{"title":"title is 17","content":"content is 17"},{"title":"title is 18","content":"content is 18"},{"title":"title is 19","content":"content is 19"},{"title":"title is 20","content":"content is 20"},{"title":"title is 21","content":"content is 21"},{"title":"title is 22","content":"content is 22"},{"title":"title is 23","content":"content is 23"},{"title":"title is 24","content":"content is 24"}]);
    return (  
        <div className="right-main">
            <div className="right-top">
                <AddNote/>
            </div>
            <div className="right-bottom">
                <ShowNotes notes={notes} />
            </div>
        </div>
    );
}
 
export default RightPane;