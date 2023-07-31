import React, { Component } from 'react'
import axios from 'axios'

export default class Contact extends Component 
{

  state = {
    users : []
  }

  componentDidMount()
  {
    // axios.get("http://localhost:4000/retrive/").then( (res) => {
    //   console.log(res.data)

    //   this.setState({
    //     users : res.data
    //   })
    // } )

    axios.get("https://mernbackend-24ac.onrender.com/retrive/").then( (res) => {
      console.log(res.data)

      this.setState({
        users : res.data
      })
    } )
  }

  render() 
  {
    return (
      <div>
        <h2> Contact page </h2>

        <div>
          {
            this.state.users.map( (user) => (
              <div key = {user._id}>
                  <p> User Name : {user.name} </p>
                  <p> Password : {user.passcode} </p>
                  <hr /> <br></br>
              </div>
            ) )
          }
        </div>

      </div>
    )
  }
}
