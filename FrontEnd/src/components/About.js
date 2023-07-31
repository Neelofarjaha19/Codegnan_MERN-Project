import React, { Component } from 'react'

export default class About extends Component {

  state = {
    employees : []
  }

  componentDidMount()
  {
    fetch("https://reqres.in/api/users?page=2")
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((updated) => {
      console.log(updated.data)
      this.setState({
        employees : updated.data
      })
    } )
  }

  render() 
  {
    return (
      <div>
        <h1> About PAge </h1>

        <div>
          {
            this.state.employees.map((employee) => (
              <div>
                <p> Name : {employee.first_name} </p> 
                <p> Email : {employee.email} </p>

                <img src= {employee.avatar} width="8%" />

                <hr /> <br></br>

              </div>
            ) )
          }
        </div>

      </div>
    )
  }
}
