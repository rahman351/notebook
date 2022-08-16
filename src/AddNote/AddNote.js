import { useEffect, useState } from 'react';
import './AddNote.css'
import addNewNote from './AddNoteUtil'
import {getAllTags} from './AddNoteUtil'


const AddNote = (props) => {

    const [showFull,setShowFull]=useState(false);
    const [title,setTitle]=useState('');
    const [color,setColor]=useState('#fff');
    const [content,setContent]=useState('');
    const [tag,setTag]=useState('Personal');

    var allTags= getAllTags();

    
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
        <div className="addnote-parent" id="addnote-parent" style={{backgroundColor:color}}>
             {showFull && <input type="text" placeholder="Title" className="addnote-title" onChange={(e)=>{setTitle(e.target.value)}}/>}
             <p/>
             <input type="text" placeholder="Take a note" className="addnote-content" onClick={()=>{setShowFull(true)}} onChange={(e)=>{setContent(e.target.value)}}/>
            {
                showFull && 
                    <div className="addnote-options">
                    <select onChange={(e)=>{setTag(e.target.value)}}  className="tag-selector">
                        {allTags.map(currentag=>{
                            return <option value={currentag}>{currentag}</option>
                        })}
                    </select>
                    <div className="color-picker">
                        <div className="choose-color-3399ff" onClick={()=> setColor('#3399ff')}/>
                        <div className="choose-color-ff99cc" onClick={()=> setColor('#ff99cc')}/>
                        <div className="choose-color-ffcc66" onClick={()=> setColor('#ffcc66')}/>
                        <div className="choose-color-99ff99" onClick={()=> setColor('#99ff99')}/>
                        <div className="choose-color-ff9966" onClick={()=> setColor('#ff9966')}/>
                    </div>
                    <button onClick={add}  className="addnote-save-btn" >Save</button>
                    </div>
            }
        </div>
    );
}
 
export default AddNote;