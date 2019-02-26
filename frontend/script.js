// alert('hello Frontend people')

let socket = io()
socket.on('connected', ()=>{
    
    console.log('Connected ' + socket.id)
})
console.log('Server  formed on ' + socket.io)


$(function(){
    let msglist = $('#msglist')
    let msgbox = $('#msgbox')
    let sendbtn = $('#sendmsg')

    sendbtn.click(function(){
        let msg = msgbox.val()
        socket.emit('send_msg',{message : msgbox.val()})
    })

})