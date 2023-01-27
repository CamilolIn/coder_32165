const {exec, spawn} = require("child_process")

// exec("ipconfig", function(error, stdout, stderror){
//     if(error){
//         console.log("error en la ejecucion "+ error)
//         return
//     }
//     if(stderror){
//         console.log("stdOut: "+ stderror)
//         return
//     }
//     if(stdout){
//         console.log("stdout: "+ stdout)
//         return
//     }
// })

const child = spawn("dir", [])
child.stdout.on("data", function(data){
    console.log("data "+ data)
})

child.error.on("data", function(error){
    console.log("Error:  "+ error)
})