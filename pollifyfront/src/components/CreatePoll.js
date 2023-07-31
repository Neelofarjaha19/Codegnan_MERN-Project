import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import '../App.css'
import axios from 'axios'

export default function CreatePoll() 
{

    const navigate = useNavigate()
    useEffect( () => {
        const localStorageItem = localStorage.getItem('token');

        if(!localStorageItem)
        {
            swal({
                title: "ERROR",
                text: "User Login Required",
                icon: "error",
            });

            navigate('/login')
        }
    }, [navigate] )

    const [polldata, setPollData] = useState({ qno: 0, question: '', option1: '', option2: '', option3: '', option4: '' });
    const changeHandler = (e) => {
        setPollData({ ...polldata, [e.target.name]: e.target.name === 'qno' ? parseInt(e.target.value, 10) : e.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault()

        // swal({
        //     title: 'SUCCESS',
        //     text: 'poll created',
        //     icon: 'success',
        //     button: 'OK'
        // });
        console.log(polldata)

        axios.post(`https://pollify-backend.onrender.com/createpoll`, polldata)
        .then( res => {
            // alert(res.data);
            swal({
                title: 'SUCCESS',
                text: `${res.data}`,
                icon: 'success',
                button: 'OK'
              });
            navigate('/visitpolls')
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
            <h1> Create Your Own Poll </h1>
      </div>

      <form onSubmit = {submitHandler} >
            <div className = "container" >
                <div className = "tag1" >
                    <label> Question Number : </label>
                    <input type = "number" name = "qno" value = {polldata.qno} onChange = { changeHandler } placeholder = "Enter Question Number" />
                </div>

                <div className = "tag1" >
                    <label> Question : </label>
                    <input type = "text" name = "question" value = {polldata.question} onChange = { changeHandler } placeholder = "Enter Your Question" />
                </div>

                <div className = "tag1" >
                    <label> Option 1 : </label>
                    <input type = "text" name = "option1" value = {polldata.option1} onChange = { changeHandler } placeholder = "Enter Option 1" />
                </div>

                <div className = "tag1" >
                    <label> Option 2 : </label>
                    <input type = "text" name = "option2" value = {polldata.option2} onChange = { changeHandler } placeholder = "Enter Option 2" />
                </div>

                <div className = "tag1" >
                    <label> Option 3 : </label>
                    <input type = "text" name = "option3" value = {polldata.option3} onChange = { changeHandler } placeholder = "Enter Option 3" />
                </div>

                <div className = "tag1" >
                    <label> Option 4 : </label>
                    <input type = "text" name = "option4" value = {polldata.option4} onChange = { changeHandler } placeholder = "Enter Option 4" />
                </div>


                <div className = "tag1" >
                    <button type = "submit" > Create </button>
                </div>
            </div>
        </form>
    </div>
  )
}
