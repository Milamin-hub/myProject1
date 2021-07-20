const express = require("express")

const Port = 3000

const app = express()

app.use("/public", express.static("public"))

app.get("/:id", function(req, res){
    res.sendFile(__dirname + "/home.html", {
        id: req.params.id,
        title: "hello"
    })
})


app.listen(Port, () => console.log("work server" + " " + Port + "..."))




