import React from 'react';
import Button from '../Button';

export default function Chat (props) {
  return (
<div>
  <div>
    <h1>Send Messages</h1>
    <input id="message" type="text" placeholder="your message here" />
    <Button message="send" />
  </div>

</div>
  )
}