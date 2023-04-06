import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteStates';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <NoteState>
      <React.Fragment>
      <BrowserRouter>
      <Navbar /> 
      <Alert  message="Alert is success." />
      <div className="container">
      <Routes>  
       <Route path="/"  element={ <Home /> } />
       <Route path="/about"  element={ <About /> } />
       <Route path="/login"  element={ <Login /> } />
       <Route path="/signup"  element={ <Signup /> } />
      </Routes>
      </div>
      </BrowserRouter>
      </React.Fragment>
      </NoteState>
    );
  }
}

export default App;
