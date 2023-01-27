const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hola mundo 1")
})

app.listen(4001, function () {
  console.log("server run - PID", process.pid);
});
