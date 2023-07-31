import React, { useState } from 'react'
import '../App.css'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() 
{

//   useEffect( () => {
//     M.AutoInit();
//   }, [] );

  const navigate = useNavigate();

//   const [firstname, setFirstName] = useState("")
//   const [lastname, setLastName] = useState("")
//   const [username, setUserName] = useState("")
//   const [password, setPassword] = useState("")
//   const [email, setEmail] = useState("")
//   const [mobile, setMobile] = useState("")
//   const [city, setCity] = useState("")
//   const [pincode, setPinCode] = useState("")

  const [register, setregister] = useState({ firstname: '', lastname: '', username: '', password: '', email: '', mobile: '', city: '', pincode: '' });
  const changeHandler = (e) => {
    setregister({ ...register, [e.target.name]: e.target.value });
}

//   function save(e)
//   {
//     setFirstName(e.target.value)
//   }

  function validation()
  {
    const namecheck = /^[a-zA-Z ]+$/
    const phonecheck = /^[0-9]{10}$/
    const mailcheck = /^[a-z0-9.#]+@[a-z]+\.[a-z]{2,3}$/
    const passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    const pincheck = /^[1-9][0-9]{5}$/

    if(register.firstname === "" || register.firstname.length < 3)
    {
        swal({
            title: "ERROR",
            text: "Please Enter Your First Name Correctly",
            icon: "error",
        });
        return false
    }

    if(!namecheck.test(register.firstname))
    {
        swal({
            title: "ERROR",
            text: "First Name Must Carry Only Alphabets...",
            icon: "error",
        });
        return false
    }

    if(!namecheck.test(register.lastname))
    {
        swal({
            title: "ERROR",
            text: "Last Name Must Carry Only Alphabets...",
            icon: "error",
        });
        return false
    }

    if(!namecheck.test(register.username))
    {
        swal({
            title: "ERROR",
            text: "User Name Must Carry Only Alphabets...",
            icon: "error",
        });
        return false
    }

    if(!passcheck.test(register.password))
    {
        swal({
            title: "ERROR",
            text: "The Password Must Contain atleast 1 Capital, 1 Small, 1 Digit and max length 6",
            icon: "error",
        });
        return false
    }

    if(!mailcheck.test(register.email))
    {
        swal({
            title: "ERROR",
            text: "Please Enter Valid Email",
            icon: "error",
        });
        return false
    }

    if(!phonecheck.test(register.mobile))
    {
        swal({
            title: "ERROR",
            text: "Please Enter valid Phone Number",
            icon: "error",
        });
        return false
    }

    if(!namecheck.test(register.city))
    {
        swal({
            title: "ERROR",
            text: "City Name Must Carry Only Alphabets...",
            icon: "error",
        });
        return false
    }

    if(!pincheck.test(register.pincode))
    {
        swal({
            title: "ERROR",
            text: "Shouldn't start with 0,9 ; max-limit 6; not allowed alphanumeric & alphabets",
            icon: "error",
        });
        return false
    }

    swal({
        title: 'SUCCESS',
        text: 'Your Credentials Has Been Saved',
        icon: 'success',
        button: 'OK'
      });

    return true
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if(validation())
    {

        axios.post(`https://pollify-backend.onrender.com/api/auth/register`, register)
        .then( res => {
            // alert(res.data);
            swal({
                title: 'SUCCESS',
                text: `${res.data}`,
                icon: 'success',
                button: 'OK'
              });
            navigate('/')
        } )
        .catch( err => {
            swal({
                title: 'ERROR',
                text: `${err.response.data}`,
                icon: 'error',
                button: 'OK'
              });
        } );

        // navigate('/')
    }
  }

  return (
    <div>
        <div className = "titname">
            <h1> Vote Registration </h1>
        </div>

        <form onSubmit = {submitHandler} >
            <div className = "container" >
                <div className = "tag1" >
                    <label> First Name : </label>
                    <input type = "text" name = "firstname" value = {register.firstname} onChange = { changeHandler } placeholder = "Enter Your First name" />
                </div>

                <div className = "tag1" >
                    <label> Last Name : </label>
                    <input type = "text" name = "lastname" value = {register.lastname} onChange = { changeHandler } placeholder = "Enter Your Last name" />
                </div>

                <div className = "tag1" >
                    <label> User Name : </label>
                    <input type = "text" name = "username" value = {register.username} onChange = { changeHandler } placeholder = "Enter Username" />
                </div>

                <div className = "tag1" >
                    <label> Password : </label>
                    <input type = "password" name = "password" value = {register.password} onChange = { changeHandler } placeholder = "Enter Your Password" />
                </div>

                <div className = "tag1" >
                    <label> Email : </label>
                    <input type = "text" name = "email" value = {register.email} onChange = { changeHandler } placeholder = "Enter Your Mail" />
                </div>

                <div className = "tag1" >
                    <label> Mobile : </label>
                    <input type = "text" name = "mobile" value = {register.mobile} onChange = { changeHandler } placeholder = "Enter Phone Number" />
                </div>

                <div className = "tag1" >
                    <label> City : </label>
                    <input type = "text" name = "city" value = {register.city} onChange = { changeHandler } placeholder = "Enter City Name" />
                </div>

                <div className = "tag1" >
                    <label> Pin Code : </label>
                    <input type = "text" name = "pincode" value = {register.pincode} onChange = { changeHandler } placeholder = "Enter Area pin code" />
                </div>

                <div className = "tag1" >
                    <button type = "submit" > Register </button>
                </div>
            </div>
        </form>
    </div>
  )
}
