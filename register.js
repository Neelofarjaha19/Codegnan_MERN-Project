function sucess()
        {
           setTimeout(function() {
                    swal({
                      title: "Good Job!",
                      text: "You have successfully Registered",
                      icon: "success",
                    });
           }, 11000); // Delay of 10 seconds (10000 milliseconds)
           return true;
        }
        function validate()
        {
            console.log("Function Started")

            var firstname = document.getElementById("fn").value
            var phone = document.getElementById("mob").value
            var mail = document.getElementById("email").value
            var usa = document.getElementById("us").value
            var password = document.getElementById("pass").value
            var dob = document.getElementById("dob").value

            console.log("Function Middle")

            var testarr = []
            testarr.push(firstname, phone, mail, usa, password, dob)
            console.log(testarr)
            
            var firstcheck = /^[a-zA-Z ]+$/
            var phonecheck = /^[0-9]{10}$/
            var mailcheck = /^[a-z0-9.#]+@[a-z]+\.[a-z]{2,3}$/
            var usacheck = /^(\([0-9]{3}\)|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/
            var passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
            var dobcheck = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

            if(firstname == "" || firstname.length < 3)
            {
                swal({
                    title: "ERROR",
                    text: "Please Enter Your Full Name...",
                    icon: "error",
                });
                return false
            }

            if(!firstname.match(firstcheck))
            {
                swal({
                    title: "ERROR",
                    text: "Name Must Carry Only Alphabets...",
                    icon: "error",
                });
                return false
            }

            if(!phone.match(phonecheck))
            {
                swal({
                    title: "ERROR",
                    text: "Please Enter valid Phone Number",
                    icon: "error",
                });
                return false
            }

            if(!mail.match(mailcheck))
            {
                swal({
                    title: "ERROR",
                    text: "Please Enter valid Email",
                    icon: "error",
                });
                return false
            }

            if(!usa.match(usacheck))
            {
                swal({
                    title: "ERROR",
                    text: "Please enter valid USA Number",
                    icon: "error",
                });
                return false
            }

            if(!password.match(passcheck))
            {
                swal({
                    title: "ERROR",
                    text: "The Password Must Contain atleast 1 Capital, 1 Small, 1 Digit and max length 6",
                    icon: "error",
                });
                return false
            }

            if(!dob.match(dobcheck))
            {
                swal({
                    title: "ERROR",
                    text: "Enter Correct Format of Date of Birth",
                    icon: "error",
                });
                return false
            }
            return sucess()
        }
