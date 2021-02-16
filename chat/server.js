const bodyParser = require('body-parser');
const pgp = require('pg-promise');

const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
const PORT = 8080;

const io = require('socket.io')(http,  {
  cors: {
    origin: 'http://localhost:3002',
    methods: ['GET', 'POST']
  }
});

const STATIC_CHANNELS = [{
  name: 'global_notifications', id: 1, sockets: []},
 {name: 'global_chat', id: 2, sockets: []}];

app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
  next();
})

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});


io.on('connection', function(socket) {
  console.log('a user is connected');
  socket.emit('connection', null);
  socket.on('send-message', message => {
    console.log('message recieved! ', message)
    io.emit('message', message);
  });
  socket.on('channel-join', id => {
    console.log('channel joined!', id);
    STATIC_CHANNELS.forEach(c => {
      if (c.id === id) {
        if (c.sockets.indexOf(socket.id) == (-1)) {
          c.sockets.push(socket.id);
          io.emit('channel', c);
        }
      } else {
        let index = c.sockets.indexOf(socket.id);
        if (index != (-1)) {
          c.sockets.splice(index, 1);
          io.emit('channel', c);
        }
      }
    });
    return id;
  })
})

io.on('send-message', message => {
  console.log('message recieved! ', message)
  io.emit('message', message);
});

app.get('/getChannels', (req, res) => {
  res.json({
    channels: STATIC_CHANNELS
  })
})

// Implement Join room event listener
// user a / user b send emit 'join-room', job_id
// socket. emit to one socket
// io. emit to everyone
// io.to ***** for connecting user-user 




