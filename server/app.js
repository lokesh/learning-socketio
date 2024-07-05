import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*", // Allow any port on localhost
    methods: ["GET", "POST"]
  }
});

// io vs socket
// ------------
// io - send to all clients
// socket - operations for a single client, incl send to all but originator

io.on("connection", (socket) => {

  socket.broadcast.emit('serverMsg', `User joined: ${socket.id}`);
  
  socket.on('msg', (msg) => {
    socket.broadcast.emit('msg', msg);
  })

});

httpServer.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});