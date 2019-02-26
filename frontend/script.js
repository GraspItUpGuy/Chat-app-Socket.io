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
    let loginBox = $('#loginbox')
    let loginbtn = $('#loginbtn')
    let loginDiv = $('#login-div')
    let chatDiv = $('#chat-div')

    let user = ''


    sendbtn.click(()=>{
        let msg = msgbox.val()
        $('#msgbox').val("")
       
        socket.emit('send_msg',{
           user : user,
             message : msgbox.val()
       })
    })

    loginbtn.click(()=>{
        user = loginBox.val()
        chatDiv.show()
        loginDiv.hide()
    })
 
 socket.on('recv_msg', (data)=>{
     console.log(data.message)
     msglist.append('<li>' + data.user + ":" + data.message  + '</li>')
 })

})