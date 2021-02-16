import React from 'react';
import { Message } from './Message';
import Button from '../Button';

export class MessagesPanel extends React.Component {
  render() {
    let list = <div>No messages available</div>
    if (this.props.channel && this.props.channel.messages) {
      list = this.props.channel.messages.map(m => <Message key={m.id} id={m.id} text={m.text} ></Message>);
    }
    return (
      <div className="messages-panel">
      <div className="messages-list">{list}</div>
      <div className="messages-input"></div>
      <input type="text"></input>
      <Button message="send" />
      </div>
    )
  }
}