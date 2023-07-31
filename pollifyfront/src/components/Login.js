import React, { useState } from 'react'
import '../App.css'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() 
{

    const navigate = useNavigate();

    const [login, setlogin] = useState({ username: '', password: '' });
    const changeHandler = (e) => {
        setlogin( { ...login, [e.target.name]: e.target.value } );
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://pollify-backend.onrender.com/api/auth/login', login)
        .then( res => { 
            localStorage.setItem('token', res.data.token); 
            navigate('/') 
        } )
        .catch( err => {
            // alert(err.response.data)
            swal({
                title: 'ERROR',
                text: `${err.response.data}`,
                icon: 'error',
                button: 'OK'
              });
        } );
    }
    
  return (
    <div>
      <div className = "titname">
            <h1> Vote Login </h1>
        </div>

        <form onSubmit = {submitHandler} >
            <div className = "container" style = {{
                height : "270px"
            }} >
                <div className = "tag1" >
                    <label> User Name : </label>
                    <input type = "text" name = "username" onChange = { changeHandler } placeholder = "Enter Your Username" />
                </div>

                <div className = "tag1" >
                    <label> Password : </label>
                    <input type = "password" name = "password" onChange = { changeHandler } placeholder = "Enter Your password" />
                </div>

                <div className = "tag1" >
                    <button type = "submit" > Login </button>
                </div>
            </div>
        </form>
    </div>
  )
}
