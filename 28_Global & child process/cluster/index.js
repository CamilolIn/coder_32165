const express = require("express")
const cluster = require("cluster")
const numCPUs = require("os").cpus().length

if(cluster.isMaster){
    for(let i = 0; i < numCPUs; i++){
        cluster.fork()
    }

    cluster.on("exit", function(){
        console.log("process ", process.pid, " died")
    })
}else{
    const app = express()

    app.get("/", function(req, res){
        res.send("Hola mundo " + process.pid)
    }) 

    app.listen(8081, function(){
        console.log("server run - PID", process.pid)
    })
}


