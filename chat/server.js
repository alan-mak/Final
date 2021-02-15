const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const server = app.listen(3003, () => {
  console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));

