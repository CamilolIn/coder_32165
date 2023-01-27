const calculo = function(){
    let sum = 0
    for(let i = 0; i < 5e9; i++){
        sum += i
    }
    return sum
}

process.on("message", function(msn){
    if(msn === "start"){
        let sum = calculo()
        process.send(sum)
    }else{
        console.log("NO inicio la funcion")
    }
})
