import React, { Component } from 'react';
import Register from "./components/Register"
import logo from './logo.svg';
import './App.css';
import EventDetails from './components/EventDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventDetails></EventDetails>
        <Register></Register>
      </div>
    );
  }
}

export default App;
