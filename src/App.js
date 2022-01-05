import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      mode : "light"
    }
  }
  toggleButton = ()=>{
    if(this.state.mode === 'light')
    {
      this.setState({
        mode : 'dark'
      })
      console.log(this.mode)
      document.body.style.backgroundColor = 'black'
    }
    else
    {
      this.setState({
        mode : 'light'
      })
      document.body.style.backgroundColor = 'white'
    }
  }
  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} handleOntoggle={this.toggleButton}/>
        <News mode={this.state.mode}/>
      </div>
    )
  }
}

export default App
