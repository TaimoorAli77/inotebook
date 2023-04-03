import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteStates';

class App extends Component {
  render() {
    return (
      <NoteState>
      <React.Fragment>
      <BrowserRouter>
      <Navbar /> 
      <div className="container">
      <Routes>  
       <Route path="/"  element={ <Home /> } />
       <Route path="/about"  element={ <About /> } />
      </Routes>
      </div>
      </BrowserRouter>
      </React.Fragment>
      </NoteState>
    );
  }
}

export default App;
