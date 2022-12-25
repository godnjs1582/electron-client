"use strict";
module.exports =(socket,win,err)=>{
    // const SocketEvent=require("../event/SocketEvent")
    console.log(`reconnect failed with ${err}`)
    // socket.emit(SocketEvent.HELLO, {message:"Hello Server!"});
    // win.webContents.send(SocketEvent.HELLO,{message:"Hello Renderer Process"})
}