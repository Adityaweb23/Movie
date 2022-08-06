import React from 'react'
import './App.css';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Error from './Error';
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie/:id" element={<SingleMovie/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </>
    /* <div className="App">
    
     <Home/> 
    </div> */
  );
}
export default App;
