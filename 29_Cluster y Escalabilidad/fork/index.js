const express = require("express")
const app = express()
const {fork} = require("child_process")

let visitas = 0

const calculo = function(){
    let sum = 0
    for(let i = 0; i < 5e9; i++){
        sum += i
    }
    return sum
}


app.get("/", function(req, res){
    visitas++
    res.send("Visitas: " + visitas)
})

app.get("/calculo", function(req, res){
    let sum = calculo()
    res.send("LA sumaes es : ", sum)
    // const comp =  fork("./calculo.js")
    // comp.send("start")
    // comp.on("message", function(sum){
    //     res.send("la suma es : " + sum)
    // })
})
app.listen(8080, function(){
    console.log("Server run on port 8080")
})