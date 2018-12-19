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
      names : []
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
        <Register></Register>
        <input type="button" className="corners" value="paina tästä" onClick = {e => this.handleClick(e)}></input>
        <NameList
          names = {this.state.names}
        />
      </div>
    );
  }
}

export default App;
