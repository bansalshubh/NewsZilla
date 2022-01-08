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

export class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: "light"
    }
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
        </ErrorBoundary>
        <Routes>
          <Route exact path="/" element={
            <News key="general" mode={this.state.mode} pageSize={6} country="in" category="general" />}>
          </Route>
          <Route exact path="/sports" element={
            <News key = "sports" mode={this.state.mode} pageSize={6} country="in" category="sports" />}>
          </Route>
          <Route exact path="/entertainment" element={
            <News key = "entertainment" mode={this.state.mode} pageSize={6} country="in" category="entertainment" />}>
          </Route>
          <Route exact path="/business" element={
            <News key = "business" mode={this.state.mode} pageSize={6} country="in" category="business" />}>
          </Route>
          <Route exact path="/technology" element={
            <News key = "technology" mode={this.state.mode} pageSize={6} country="in" category="technology" />}>
          </Route>
          <Route exact path="/health" element={
            <News key = "health" mode={this.state.mode} pageSize={6} country="in" category="health" />}>
          </Route>
          <Route exact path="/science" element={
            <News key = "science" mode={this.state.mode} pageSize={6} country="in" category="science" />}>
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default App;
