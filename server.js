const express = require('express')
const path = require('path')
const socketIO = require('socket.io')
const http = require('http')

const app = express()
const port = process.env.PORT || 3000;

const server = http.createServer(app)
const io = socketIO(server)

app.use('/', express.static(path.join(__dirname, 'frontend')))

io.on('connection',(socket)=>{
    console.log("New socket formed from " + socket.id)
    socket.emit('connected')
})


server.listen(port,()=> console.log(`server running on http://localhost:${port} `))