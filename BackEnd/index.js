// console.log(" Hii Bro ")

const express = require("express")
const app = express()
const products = require("./products")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const Content = require("./schema")


app.use(bodyParser.urlencoded({
    extended : true
}) )

app.use(bodyParser.json())

app.use(cors())


mongoose.connect("mongodb+srv://mjnvsai:mjnvsai@cluster0.kc6nhff.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(() => {
    console.log("Mongo db Connected Started Sucessfully ")
} )
.catch((err) => {
    console.log(err)
} )


app.post("/add", (req, res) => {
    console.log("add api ")
    console.log("Data From Front End : ", req.body)
    const {name, passcode} = req.body
    const newData = new Content({
        name, passcode
    })
    newData.save()

    res.send(" Data Added Sucessfully ")
} )


app.get("/retrive", (req, res) => {
    Content.find().then(found => res.json(found) )
} )

app.get("/", (req, res) => {
    res.send("Server Has Started Sucessfully")
} )

app.get("/myproducts", (req, res) => {
    res.json(products)
} )


app.get("/name", (req, res) => {
    res.send(" Codegnan Organization ")
} )


app.listen(4000, () => console.log("Server is Started") )