import { useEffect, useState } from 'react';
import './AddNote.css'


const AddNote = () => {

    const [showFull,setShowFull]=useState(false);
    
    useEffect(()=>{
        window.addEventListener("click", function(e) {
            console.log("Clicked");
            if(!document.getElementById("addnote-parent").contains(e.target)){
                setShowFull(false);
            }
        });
    });


    return (
        <div className="addnote-parent" id="addnote-parent">
             {showFull && <input type="text" placeholder="Title" className="addnote-title" />}
             <p/>
             <input type="text" placeholder="Take a note" className="addnote-content" onClick={()=>{setShowFull(true)}}/>
            {
                showFull && 
                    <div className="addnote-options">
                    <span>qwerty</span>
                    <button>save</button>
                    </div>
            }
        </div>
    );
}
 
export default AddNote;