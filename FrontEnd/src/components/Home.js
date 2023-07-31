import React, {useState} from 'react'
import App from '../App.css'
import swal from 'sweetalert'
import axios from 'axios'

export default function Home() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function save(e)
    {
        setUsername(e.target.value)
    }

    function show()
    {
        console.log(username)
        alert("username is : " + username + "\n" + "password is : " + password)
        setUsername("")
        setPassword("")
    }

    function show3()
    {
        console.log(username)
        
        axios.post("https://reqres.in/api/users", {name : username, passcode : password} )
        .then((res) => {
          console.log(res)
        })

        setUsername("")
        setPassword("")
    }

    function show4()
    {
        console.log(username)
        
        axios.post("http://localhost:4000/add", {name : username, passcode : password} )
        .then((res) => {
          console.log(res)
        })

        setUsername("")
        setPassword("")
    }

    function show5()
    {
      console.log(username)
        
    swal({
      title: 'SUCCESS',
      text: 'Your Credentials Has Been Saved',
      icon: 'success',
      button: 'OK'
    });

      axios.post("https://mernbackend-24ac.onrender.com/add", {name : username, passcode : password} )
      .then((res) => {
        console.log(res)
      })

      setUsername("")
      setPassword("")
    }

    function show2()
    {
      console.log(username)

      swal({
        title: 'Login Credentials',
        text: `Username is: ${username} \n Password is: ${password}`,
        icon: 'info',
        button: 'OK'
      });

      setUsername("")
      setPassword("")

    }

  return (
    <div className='rootApp'>
      <h1> Home Page </h1>

      <p> <input value={username} type='text' placeholder='Enter User Name' onChange={save} /> </p>
      <p> <input value={password} type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /> </p>
      <button onClick={show5} > SUBMIT </button>

    </div>
  )
}
