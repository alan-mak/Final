import React from 'react';
import { Message } from './Message';

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
    let list = <div>Click "Clarify!" to message the poster!</div>
    if (this.props.channel && !this.props.channel.messages) {
      list = <div>No messages currently available, send one!</div>
    } else if (this.props.channel && this.props.channel.messages) {
      list = this.props.channel.messages.map(m => <Message key={m.id} senderID={this.props.userID} senderName={m.senderName} id={m.id} text={m.text} />);
    }
  
    return (
      <div className="messages-panel">
        {this.props.channel &&<p id="channel-name" >Messages for "{this.props.channel.name}"</p>}
      <div className="messages-list">{list}</div>
      {this.props.channel &&
      <div className="messages-input">
      <input type="text" onChange={this.handleInput} value={this.state.input_value} />
      <button id="send-button" onClick={this.send}>Send</button>
      </div>
    }
      </div>
    )
  }
}