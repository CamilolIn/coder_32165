const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hola mundo TRESSSSSSS")
})

app.listen(4003, function () {
  console.log("server run - PID", process.pid);
});