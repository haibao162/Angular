var WebSocketServer = require('ws').Server;
//https://www.cnblogs.com/stoneniqiu/p/5402311.html
// { [Function: WebSocket]
//   CONNECTING: 0,
//   OPEN: 1,
//   CLOSING: 2,
//   CLOSED: 3,
//   Server: [Function: WebSocketServer],
//   Receiver: [Function: Receiver],
//   Sender: [Function: Sender] }
wss = new WebSocketServer({ port:8181 });
