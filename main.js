"use strict"

const electron = require("electron");
const url = require("url");
const path = require("path");
const io=require("socket.io-client");
const axios=require("axios");
const SocketService=require("./service/SocketService");
const socketURL="ws://127.0.0,1:3000";
const socketOptions={
    transports:['websocket'],
    forceNew:true,
    query:{
        token:"권해원123"
    }
}
const handler_manager=require("./handler_manager")

const {app,BrowserWindow}=electron;

let win;
let socket;

app.on("ready",()=>{
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    const options ={
        width:width,
        height:height,
        resizable:false,
        fullscreenable:false,
        show:false,//window로 loadUrl을 직접 띄움(제어를 위함)
        webPreferences:{
            affinity:true,
            nodeIntegration:true
        }
    };
    win = new BrowserWindow(options);
    win.loadURL(url.format({
        pathname:path.join(__dirname, "login.html"),
        protocol:"file"
    }));
    win.webContents.openDevTools();
    win.once("ready-to-show",()=>{
        console.log("ready-to-show")
        socket=SocketService.createSocket(io,socketURL,socketOptions);
        SocketService.addHandlers(socket,win,handler_manager);
        // SocketService.addHandler(socket,win,handler_manager);
        win.show()
        //모든 웹 컨텐츠가 로드 된 이후에 소켓 연결
    });
    win.on('closed',()=>{
        console.log("window-closed")
        win=null;
        app.quit();
    })
});
app.on("window-all-closed",()=>{
    app.quit();
});
app.on("activate",()=>{
    app.quit();
});
