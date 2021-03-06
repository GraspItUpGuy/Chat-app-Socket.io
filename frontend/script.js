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
      
        socket.emit('send_msg',{
            message : msgbox.val(),
            user : loginBox.val()
         })
         
    })

    loginbtn.click(()=>{
        user = loginBox.val()
        chatDiv.show()
        loginDiv.hide()
        socket.emit('login', {
            user : loginBox.val()
        })
        
    })
 
 socket.on('recv_msg', (data)=>{
     msglist.append('<li>' + data.user + ": " +  data.message + '</li>')
 })

})