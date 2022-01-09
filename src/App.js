import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import ErrorBoundary from './components/ErrorBoundary';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {

  api_key = process.env.REACT_APP_API_KEY

  constructor() {
    super();
    this.state = {
      mode: "light",
      progress : 10
    }
  }

  SetState = (progress)=>{
    this.setState({
      progress : progress
    });
  }

  toggleButton = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
      console.log(this.mode)
      document.body.style.backgroundColor = '#3d3b3b'
    }
    else {
      this.setState({
        mode: 'light'
      })
      document.body.style.backgroundColor = 'white'
    }
  }
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Navbar mode={this.state.mode} handleOntoggle={this.toggleButton} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={2.5}
          />
        </ErrorBoundary>
        <Routes>
          <Route exact path="/" element={
            <News SetState = {this.SetState} api_key={this.api_key} key="general" mode={this.state.mode} pageSize={6} country="in" category="general" />}>
          </Route>
          <Route exact path="/sports" element={
            <News SetState = {this.SetState} api_key={this.api_key} key="sports" mode={this.state.mode} pageSize={6} country="in" category="sports" />}>
          </Route>
          <Route exact path="/entertainment" element={
            <News SetState = {this.SetState} api_key={this.api_key} key="entertainment" mode={this.state.mode} pageSize={6} country="in" category="entertainment" />}>
          </Route>
          <Route exact path="/business" element={
            <News SetState = {this.SetState} api_key={this.api_key} key="business" mode={this.state.mode} pageSize={6} country="in" category="business" />}>
          </Route>
          <Route exact path="/technology" element={
            <News SetState = {this.SetState} api_key={this.api_key} key="technology" mode={this.state.mode} pageSize={6} country="in" category="technology" />}>
          </Route>
          <Route exact path="/health" element={
            <News SetState = {this.SetState} api_key={this.api_key} key="health" mode={this.state.mode} pageSize={6} country="in" category="health" />}>
          </Route>
          <Route exact path="/science" element={
            <News SetState = {this.SetState} api_key={this.api_key} key="science" mode={this.state.mode} pageSize={6} country="in" category="science" />}>
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default App;
