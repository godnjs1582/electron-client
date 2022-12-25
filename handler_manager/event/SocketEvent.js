"use strict";

// default event name(connection info)

exports.CONNECT="connet";//연결이 되었을 떄

exports.DISCONNECT="disconnect";//연결이 끊겼을 떄

exports.CONNECT_TIMEOUT="connect_timeout";//커넥트 도중에 연결이 끊김

exports.RECONNECTING="reconnecting";//재접속

exports.RECONNECT_ERROR="reconnect_error";//재접속 중 에러

exports.RECONNECT_FAILED="reconnect_failed";//재접속 완전히 실패

exports.PING="ping";

exports.PONG="pong";

// user define event name

exports.HELLO="hello";