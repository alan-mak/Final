const express = require('express');
const app = express();

const useMessagingData = () => {
  const messages = [];
function sendMessage (message) {
  messages.push(message);
}

function getMessages() {
  app.get('/api/messages' , (req, res) => {
    getMessages.forEach(addMessages);
  })
}

function addMessage(message) {
}

return {
  sendMessage,
  getMessages,
  addMessage
}

}