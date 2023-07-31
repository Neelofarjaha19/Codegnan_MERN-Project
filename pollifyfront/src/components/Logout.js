import React, {useEffect} from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function Logout() 
{
    const navigate = useNavigate();
    useEffect( () => {

        swal({
            title: 'Logout',
            text: "You Will Logged Out In 2 Seconds",
            icon: 'info',
            button: 'OK'
          });

        setInterval(() => {
          localStorage.removeItem('token');
        }, 2000);

        // Navigate to the login page or any desired route
        navigate('/login');
    }, [navigate] )

  return (
    <div>
      <div className = "titname">
          <h1> You have been Logged Out </h1>
      </div>
    </div>
  )
}
