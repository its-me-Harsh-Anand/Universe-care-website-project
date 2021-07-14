const express = require("express")
const fs = require("fs")
const app = express()
const path = require("path")
const bodyparser = require("body-parser")
const alert = require("alert")

const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://harshview:<password>@cluster0.rp6dt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://harshview:@Harsh1379@cluster0.rp6dt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("Node.js and Mongo is finally connected.")
})

var contactSchema = new mongoose.Schema({
  usermail: String,
})

const Contact = mongoose.model("Contact", contactSchema)

//setting express stuff
app.use("/static", express.static("static"))
app.use(express.urlencoded()) //must use this to save data to mongod database

//Setting PUG Stuff
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

//Endpoint
app.get("/", (req, res) => {
  res.status(200).render("index.pug")
})

app.get("*", (req, res) => {
  res.status(200).render("index.pug")
})
app.post("/", (req, res) => {
  var myData = new Contact(req.body)
  myData
    .save()
    .then(() => {
      alert("Thanks for joining us. Stay safe, stay Healthy")
      res.render("index.pug")
    })
    .catch(() => {
      alert("Oops! Something went wrong. Please try again.")
      res.status(400).render("index.pug")
    })
})

const hostname = "127.0.0.1"
const port = process.env.PORT || 80
app.listen(port, (req, res) => {
  console.log(`App is running on http://${hostname}:${port}`)
})
