const bodyParser = require("body-parser")
const express = require("express")
//import express from "express"



const Port = 3000

const app = express()

app.set("view engine", "pug")

app.use("/public", express.static("public"))



app.get("/", (req, res) => {
    console.log(req.url)
    res.render("home", {
        id: req.params.id,
        title: "home"
    })
})



app.get("/id", (req, res) => {
    console.log(req.url)
    res.render("id", {
        title: "id"
    })
})

app.get("/about", (req, res) => {
    console.log(req.url)
    res.render("about", {
        id: req.params.id,
        title: "about"
    })
})

app.listen(Port, () => console.log("work server" + " " + Port + "..."))

/*
app.get("/:id", function(req, res){
    res.sendFile(__dirname + "/home.html", {
        id: req.params.id,
        title: "hello"
    })
})
*/






