const express = require('express')();
const Http = require('http').Server(express);
const io = require('socket.io')(Http);

const PORT = process.env.PORT || 3000;

let position = {
	x: 200,
	y: 200,
};


io.on('connection', socket => {
  // socket.emit()           send to single client
  // socket.broadcast.emit() send to all but originator
  // io.emit()               send to all

  socket.emit('message', 'Welcome to chat!');

  socket.broadcast.emit('message', 'A user joined the chat');

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  })

	socket.on('move', () => {
		io.emit('position', 'position');
	})


})

Http.listen(PORT, () => {
	console.log('hi there');
})
