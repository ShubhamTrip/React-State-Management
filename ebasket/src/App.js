import './App.css';
import React,{useState} from 'react';
import {Nav,CardSection} from './Components';
function App() {
  let [data,setData]=useState(0);
  function topcallback(value){
      data=setData(value)
  }
  return (
    <div className="App">
       <Nav value={data}/>
       <CardSection callback={topcallback}/>
    </div>
  );
}

export default App;
