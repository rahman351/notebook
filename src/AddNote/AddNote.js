import { useEffect, useState } from 'react';
import './AddNote.css'
import addNewNote from './AddNoteUtil'


const AddNote = (props) => {

    const [showFull,setShowFull]=useState(false);
    const [title,setTitle]=useState('');
    const [color,setColor]=useState('#3399ff');
    const [content,setContent]=useState('');
    const [tag,setTag]=useState('Personal');

    var allTags=["Personal","Work","Sports","Others"];

    
    useEffect(()=>{
        window.addEventListener("click", function(e) {
            console.log("Clicked");
            if(!document.getElementById("addnote-parent").contains(e.target)){
                setShowFull(false);
            }
        });

    });

    const add = () =>{
        addNewNote(color,title,content,tag);
        props.setNotes(JSON.parse( localStorage.getItem("notebook")).data);
    }
    return (
        <div className="addnote-parent" id="addnote-parent">
             {showFull && <input type="text" placeholder="Title" className="addnote-title" onChange={(e)=>{setTitle(e.target.value)}}/>}
             <p/>
             <input type="text" placeholder="Take a note" className="addnote-content" onClick={()=>{setShowFull(true)}} onChange={(e)=>{setContent(e.target.value)}}/>
            {
                showFull && 
                    <div className="addnote-options">
                    <select onChange={(e)=>{setTag(e.target.value)}}>
                        {allTags.map(currentag=>{
                            return <option value={currentag}>{currentag}</option>
                        })}
                    </select>
                    <button onClick={add}>save</button>
                    </div>
            }
        </div>
    );
}
 
export default AddNote;