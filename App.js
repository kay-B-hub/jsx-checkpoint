import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
function App() {
  return (
    <div>  
 
    	<h1 className = ”title red” > Your name here </h1>  <br>
 
      <img src={imageInSrc.jpeg} /> <br> 
 
      <img src= {imageInPublic.jpg} />  
 
    </div>  
 
    <video width="320" height="240" controls>  
 
        <source src={myVideo.mp4} type={video/mp4}> 
 
    </video> 
  );
}

export default App;
