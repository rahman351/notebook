import { useState } from 'react';
import './LeftPane.css'
import addTag from './AddTagUtil';

const LeftPane = (props) => {

    const [newTag,setNewTag]=useState('');

    var data= localStorage.getItem("notebook");
    data=JSON.parse(data);
    var allTags =data.tags;

    return ( 
        <div className="left">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Rubik&display=swap" rel="stylesheet"/>
            <div onClick={()=>{props.setTag("All")}} className='left-item'>
                <div className='bullet'/>
                <span>All</span>
            </div>
            {allTags.map(currentTag=>{
               return  <div onClick={()=>{props.setTag(currentTag)}} className='left-item'>
                <div className='bullet'/>
                <span>{currentTag}</span>
            </div>
            })}
            <div className="newtag">
                <input type='text' className='new-tag-content' onChange={(e)=>{setNewTag(e.target.value)}}/>
                <button onClick={()=>{addTag(newTag)}} className='new-tag-btn'>+</button>
            </div>
            
        </div>
     );
}
 
export default LeftPane;