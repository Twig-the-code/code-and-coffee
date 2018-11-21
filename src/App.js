import React, { Component } from 'react';
import Register from "./components/Register"
import logo from './logo.svg';
import './App.css';
import EventDetails from './components/EventDetails';
import NameList from './components/NameList';

class App extends Component {
  render() {
    const names = ["a","b","c","d","skorg"];
    return (
      <div className="App">
        <EventDetails></EventDetails>
        <Register></Register>
        <NameList 
          names = {names}
        />
      </div>
    );
  }
}

export default App;
