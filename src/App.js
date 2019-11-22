import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav'
import 'typeface-roboto';
import Wallpaper  from './Components/Wallpaper/Wallpaper'
import MediaCard from './Components/MediaCard/MediaCard'
import Title from './Components/Title/Title'

class App extends Component{
  render(){
    let userName="User Name"
    const title= 'Book Title'
    const body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.import React from 'react';"


  return (
    <div className="App">
      <Nav/>
      <Title userName={userName}/>
      <MediaCard bookTitle={title} body={body} />
      <Wallpaper/>
        
     
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
    </div>
  );
}
}
export default App;
