import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import ErrorBoundary from './components/ErrorBoundary';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default function App() {
  
  const api_key = process.env.REACT_APP_API_KEY
  const [mode, setMode] = useState('light')
  const [progress, setProgress] = useState(10)


  const SetState = (progress)=>{
    setProgress(progress)
  }

  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark')
      // console.log(this.mode)
      document.body.style.backgroundColor = '#3d3b3b'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
    return (
      <Router>
        <ErrorBoundary>
          <Navbar mode={mode} handleOntoggle={toggleButton} />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={2.5}
          />
        </ErrorBoundary>
        <Routes>
          <Route exact path="/" element={
            <News SetState = {SetState} api_key={api_key} key="general" mode={mode} pageSize={6} country="in" category="general" />}>
          </Route>
          <Route exact path="/sports" element={
            <News SetState = {SetState} api_key={api_key} key="sports" mode={mode} pageSize={6} country="in" category="sports" />}>
          </Route>
          <Route exact path="/entertainment" element={
            <News SetState = {SetState} api_key={api_key} key="entertainment" mode={mode} pageSize={6} country="in" category="entertainment" />}>
          </Route>
          <Route exact path="/business" element={
            <News SetState = {SetState} api_key={api_key} key="business" mode={mode} pageSize={6} country="in" category="business" />}>
          </Route>
          <Route exact path="/technology" element={
            <News SetState = {SetState} api_key={api_key} key="technology" mode={mode} pageSize={6} country="in" category="technology" />}>
          </Route>
          <Route exact path="/health" element={
            <News SetState = {SetState} api_key={api_key} key="health" mode={mode} pageSize={6} country="in" category="health" />}>
          </Route>
          <Route exact path="/science" element={
            <News SetState = {SetState} api_key={api_key} key="science" mode={mode} pageSize={6} country="in" category="science" />}>
          </Route>
        </Routes>
      </Router>
    )
}
