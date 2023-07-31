const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/schema');
const { Poll } = require('../models/pollschema')
const jwt = require('jsonwebtoken');

//register route
router.post("/register", async (req, res) => {
    let { firstname, lastname, username, password, email, mobile, city, pincode } = req.body;

    //check the user already exist with this email
    const takenEmail = await User.findOne({ username: username });

    if (takenEmail) 
    {
        return res.status(405).json("voter already exists");
    } 
    else 
    {
        password = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            firstname,
            lastname,
            username,
            password,
            email,
            mobile,
            city,
            pincode,
        });

        await newUser.save();
        return res.json("voter account created sucessfully");
    }
});


//login user
router.post("/login", async (req, res) => {
    try 
    {
        const { username, password } = req.body;

        //confirm the user is register or not
        const userexist = await User.findOne({ username: username });

        if (!userexist) 
        {
            return res.status(404).json('user not found');
        }

        bcrypt.compare(password, userexist.password).then( (isCorrect) => {
            if (isCorrect) 
            {
                let payload = {
                    user: {
                        id: userexist.id
                    }
                }
                
                jwt.sign(payload, 'newsecreate', { expiresIn: 360000000 }, (err, token) => {
                    if (err) throw err;
                    return res.status(200).json({ token: token, name: userexist.name });
                });
            }
            else 
            {
                return res.status(405).json('password is incorrect');
            }
        }
        );
    } 
    catch (error) 
    {
        return res.status(500).json("server error")
    }
});

//Create Poll Route
router.post("/createpoll", async (req, res) => {
    let { qno, question, option1, option2, option3, option4 } = req.body;

    //check the question number already exist with this poll
    const takenNumber = await Poll.findOne({ qno: qno });

    if (takenNumber) 
    {
        return res.status(405).json("Question Number Already Exists");
    } 
    else 
    {
        // password = await bcrypt.hash(req.body.password, 10);
        const newPoll = new Poll({
            qno,
            question,
            option1,
            option2,
            option3,
            option4,
        });

        await newPoll.save();
        return res.json("Your New Poll has Been Created Sucessfully");
    }
});

// Retrive Poll Data
// router.post("/retrivepoll", async (req, res) => {
//     Poll.find().then( found => res.json(found) )
// } );


module.exports = router;