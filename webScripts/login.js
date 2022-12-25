"use strict";

(()=>{
    const electron =require("electron");
    const ipcRenderer=electron.ipcRenderer;
    const SocketEvent=require("././handler_manage/event/SocketEvent");
    ipcRenderer.on(SocketEvent.HELLO,()=>{
        console.log(message)
    })
})();