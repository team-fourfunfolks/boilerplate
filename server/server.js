// Main starting point of the application
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')(server);


// Server Setup
const port = process.env.PORT || 3000;
server.listen(port);
console.log('Server listening on:', port);


// App Setup
// Middleware
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.send('Connected to server');
});


// Socket connection
// const users = 0;
// io.on('connection', function (socket) {
//   users++;
//   console.log(users + ' connected with socket');

//   socket.on('disconnect', function(){
//     users--;
//     console.log('disconnect felt \n');
//   });
// });

