import React from 'react';
import { Message } from './Message';
import Button from '../Button';

export class MessagesPanel extends React.Component {
  state = { input_value: '' };
  send = () => {
    if (this.state.input_value && this.state.input_value != '') {
      this.props.onsendmessage(this.props.channel.id, this.state.input_value);
      this.setState({ input_value: ''});
    }
  }
  handleInput = e => {
    this.setState({ input_value: e.target.value });
  }

  
  render() {
    let list = <div>No messages available</div>
    if (this.props.channel && this.props.channel.messages) {
      list = this.props.channel.messages.map(m => <Message key={m.id} senderName={m.senderName} id={m.id} text={m.text} ></Message>);
    }
    return (
      <div className="messages-panel">
      <div className="messages-list">{list}</div>
      {this.props.channel &&
      <div className="messages-input">
      <input type="text" onChange={this.handleInput} value ={this.state.input_value} />
      <Button message="send" onClick={this.send} />
      </div>
    }
      </div>
    )
  }
}