var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

var massage = []

app.use(express.static('.'))

app.get('/',(req,res)=>{
    res.redirect('index.html')
})

io.on('connection',function(socket){
    for (let i in massage) {
        socket.emit("display massege",massage[i]);
    }
    socket.on("send massage",function(data){
        massage.push(data)
        io.socket.emit("display massege",data)
    })
})

server.listen(3000)



