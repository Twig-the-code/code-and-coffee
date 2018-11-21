import React, { Component } from 'react';
import Register from "./components/Register"
import logo from './logo.svg';
import './App.css';
import EventDetails from './components/EventDetails';
import NameList from './components/NameList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : ["a","b","c","d","skorg"]
    }
  }
  handleClick(event){
    const names = this.state.names.concat("apua")
    this.setState({
      names
    })
    console.log("apua")
  }
  render() {
    return (
      <div className="App">
        <EventDetails></EventDetails>
        <input type = "button" onClick = {e => this.handleClick(e)}></input>
        <Register></Register>
        <NameList 
          names = {this.state.names}
        />
      </div>
    );
  }
}

export default App;
