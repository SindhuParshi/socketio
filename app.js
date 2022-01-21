let express = require("express");
let app = express();
let http = require("http").createServer(app);
//create the reference of socket io with the help of 
//http module using iife syntax
let io = require("socket.io")(http);   //here io is reference

//http://localhost:8080
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})
//this code will execute when any client send the request to 
//this application using socket.io library
io.on("connection",(socket)=> {
    //this message display on server console.
    console.log("Client Connected...");

    //this code is used to receive the message from browser client
    socket.on("obj",(msg)=> {
        console.log(msg);
    })
    //send msg to browser client
    socket.emit("obj1","From Server: You connected socket io library successfully")
})









http.listen(8080,()=>console.log("Server is running on port number 8080"));
