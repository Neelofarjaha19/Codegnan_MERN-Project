import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default class Navigation extends Component 
{

    state = {
        logo :  "https://img.freepik.com/free-vector/hand-with-voting-sign-election_1017-18637.jpg",
        title : "Pollify Voting"
    }

  render() 
  {
    return (
        <nav>
            <ul className = "navbar-list">
                <li style={{
                    marginRight : '50%'
                }} >
                    <img
                        style={{
                            paddingTop : '12px',
                            borderRadius : '50%',
                            width : '50px'
                        }}
                        src = {this.state.logo}
                        alt = 'Vote'
                    />
                </li>

                <li>
                    <Link className = "nav-link" to = "/" > Home </Link>
                </li>

                <li>
                    <Link className = "nav-link" to = "/visitpolls" > Visit Polls </Link>
                </li>

                <li>
                    <Link className = "nav-link" to = "/createpoll" > Create Poll </Link>
                </li>

                <li>
                    <Link className = "nav-link" to = "/register" > SignUp </Link>
                </li>

                <li>
                    <Link className = "nav-link" to = "/login" > Login </Link>
                </li>

                <li>
                    <Link className = "nav-link" to = "/logout" > LogOut </Link>
                </li>
            </ul>
        </nav>
    )
  }
}
