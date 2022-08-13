import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContainer from './MainContainer/MainContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(localStorage.getItem("notebook") == null){
  var data = {"data":[{"id":0,"color":"aqua","tag":"Personal","title":"Sample Title","content":"Sample Content"},{"id":1,"color":"crimson","tag":"Personal","title":"Sample Title2 ","content":"Sample Content2"}],"tags":["Personal"]}
  localStorage.setItem("notebook", JSON.stringify(data));
}
root.render(
  <React.StrictMode>
    <MainContainer/>
  </React.StrictMode>
);
