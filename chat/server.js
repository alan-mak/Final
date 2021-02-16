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

const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

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
})





