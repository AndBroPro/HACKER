// var os = require('os')

// console.log(os.platform())

var express = require('express')
var app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Cool Hacker</h1>")
})
app.get('/name/:name/',(req,res)=>{
    let name = req.params.name
    
    res.send(`<h1>Hello ${name}</h1>`)

})
app.get('/google',(req,res)=>{
    res.redirect('https://www.google.com')
})
app.get('/google/:search/',(req,res)=>{
    let  search= req.params.search
    res.redirect(`https://www.google.com/search?q=${search}`)
})

app.get('/*',(req,res)=>{
    res.send("404")
})
app.listen(3000,()=>{
    console.log("Port: 3000")
})


// var fs = require("fs")
// // fs.appendFileSync("my.text","Hello dude")

// var obj = {
//     name:"Ando",
//     age:15,
//     email:"COOLHAKER@MAIL.RU"
// }

// fs.appendFileSync("my.text",JSON.stringify(obj))