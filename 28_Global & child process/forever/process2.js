const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hola mundo 2")
})

app.listen(4002, function () {
  console.log("server run - PID", process.pid);
});
