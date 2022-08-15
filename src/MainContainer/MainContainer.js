import './MainContainer.css'
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
import { useState } from 'react';
const MaainContainer = () => {
    const [tag,setTag]=useState('All');
    return ( 
        <div className="main-container">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
            <div className="main-top-container">
                <div className="heading">Simple Note Taking App</div>
                <div className="info">Source Code : <a href="https://github.com/rahman351/notebook">https://github.com/rahman351/notebook</a></div>
            </div>
            <div className="main-bottom-container">
                <LeftPane setTag={setTag}/>
                <RightPane tag={tag}/>
            </div>
        </div>
     );
}
 
export default MaainContainer;