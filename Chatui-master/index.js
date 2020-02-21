// Getting what we need. Yes, we do need express because we will use node js in the backend, right?
var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(4000, function() {});

//Static files
app.use(express.static("public/")); //I followed the convetion we saw in the video. We do not need this but it is good to have the stuff inside a file.
//the server
var io = socket(server);
//horrible variables for now:
const BOT_NAME = "Asem"; // just test names
const PERSON_ONE_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";


// name socket array
arrNameSocket = require("./socketManager").name_socket;


io.on("connection", function(socket) {
  var userName;
  console.log("Someone just logged in!", "id", socket.id);

  // Getting the emmitted name and pushing it along with the socket to the array
  socket.on('nameInfo', function(data){
    userName = data.name;
    nameIsValid = arrNameSocket.some(obj => obj.name === data.name);
    io.sockets.emit('validateUser', nameIsValid);
    if (!nameIsValid)
      arrNameSocket.push({ name: data.name, socketId: socket.id });
  })

  // handling the emmitted data from msgForm( with event 'chat')
  socket.on("chat", function(data) {
    data = {name:data.name, socketId:socket.id, message:data.message}
    io.to(socket.id).emit("chat-me", data); // emit to my socket to disp my message on the right side 
    socket.broadcast.emit("chat", data); // emit to all and disp on left
   
  });

  socket.on('disconnect', function () {
    arrNameSocket = arrNameSocket.filter(person => person.name != userName);
    console.log(arrNameSocket)
  });


});

