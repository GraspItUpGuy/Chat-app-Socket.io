// alert('hello Frontend people')

let socket = io()
socket.on('connected', ()=>{
    
    console.log('Connected ' + socket.id)
})
console.log('Server  formed on ' + socket.io)