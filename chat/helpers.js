const express = require('express');
const app = express();


function sendMessage (message) {
  app.post('/api/messages', (message) {
    
  })
  getMessages();
}

function getMessages() {
  app.get('/api/messages' , (req, res) => {
    getMessages.forEach(addMessages);
  })
}

function addMessage(message) {
  render(); {
   ' <p>{message}</p>'
  }
}