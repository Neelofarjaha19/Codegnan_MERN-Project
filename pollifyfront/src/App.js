import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import CreatePoll from './components/CreatePoll';
import Visitpolls from './components/visitpolls';
import SurveyPoll from './components/SurveyPoll';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/visitpolls" element = {<Visitpolls />} />
            <Route path="/createpoll" element = {<CreatePoll />} />
            <Route path="/register" element = {<Register />} />
            <Route path="/login" element = {<Login /> } />
            <Route path="/logout" element = {<Logout />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
