const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise');
//const db = pgp('postgres://connormackay@localhost:3000/messages'); //Test database, not for production

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const http = require('http').Server(app);
const io = require('socket.io')(http);


const server = app.listen(3003, () => {
  console.log('server is running on port', server.address().port);
});

io.on('connection', () => {
  console.log('a user is connected');
})

app.use(express.static(__dirname));

app.get('/messages', (req, res) => {
  MessageChannel.find({}, (err, messages) => {
    res.send(messages);
  })
});

app.post('/messages', (req, res) => {
  let message = new Message(req.body);
  message.save((err) => {
    if (err)
    sendStatus(500);
    res.sendStatus(200);
  })
})

