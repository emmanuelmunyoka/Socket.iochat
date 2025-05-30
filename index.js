const express = require('express')
const http = require ('http')
const path = require('path')
const app = express()
const serveur = http.createServer(app)
const socketIo = require('socket.io')
const io = socketIo(serveur)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'b.html'))
})
 io.on('connection',(socket)=>{
  console.log('utilisateur connecté')
  socket.on('message',(data)=>{
       console.log(data)
       io.emit('reponse',data)
  
  })
 })
serveur.listen(200,()=>{
  console.log('http://localhost:200')
})