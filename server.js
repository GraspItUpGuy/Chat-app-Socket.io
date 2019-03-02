const express = require('express')
const path = require('path')
const socketIO = require('socket.io')
const http = require('http')

const app = express()
const port = process.env.PORT || 3000;

const server = http.createServer(app)
const io = socketIO(server)
let userSockets = {}

app.use('/', express.static(path.join(__dirname, 'frontend')))

io.on('connection',(socket)=>{
    console.log("New socket formed from " + socket.id)
    socket.emit('connected')
   
    socket.on('login', (data)=>{
        userSockets[data.user] = socket.id
        console.log(userSockets)
    })


    socket.on('send_msg',(data)=>{
        
        // console.log("recieved message = " + data.message)
        // io.emit('recv_msg', data)
        // if we use io.emit => everyone gets it
        // if we use socket.broadcast.emit => only others get it
        if(data.message.startsWith('@')) {
            let reciever = data.message.split(':')[0].substr(1)
            let recSocket = userSockets[reciever]
            io.to(recSocket).emit('recv_msg',data)
        } else{
        socket.broadcast.emit('recv_msg', data)
        }
    })
})


server.listen(port,()=> console.log(`server running on http://localhost:${port} `))