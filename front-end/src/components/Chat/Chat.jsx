import React from 'react';
import Button from '../Button';
import useState from 'react';
//import useMessagingData from '../../../../chat/helpers';

export default function Chat (props) {
  //const [message, setMessage] = useState("");
  let messages = ["say whaaat?"]

  const addMessage = function(message) {
    messages.push(message);
  }
  const messageList = messages.map((m) => <li>{m}</li>);
  return (
<div>
  <div>
    <h1>Send Messages</h1>
     { messageList }
    <input id="message" type="text" placeholder="your message here" />
    <Button message="send" onClick={() => addMessage()}/>
  </div>

</div>
  )
}