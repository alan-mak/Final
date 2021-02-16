import React, { useEffect } from 'react';
import { ChannelList } from './ChannelList';
import  { MessagesPanel } from './MessagesPanel';
import socketClient from 'socket.io-client';


export class Chat extends React.Component {
  state = {
    channels: null,
    socket: null,
    channel: null
  }

  componentDidMount() {
    this.loadChannels();
    this.configureSocket();
  }

  configureSocket = () => {
    const SERVER = "http://localhost:8080"
    const socket = socketClient(SERVER);
    socket.on('connection', () => {
      if (this.state.channel) {
        this.handleChannelSelect(this.state.channel.id);
      }
    });
    socket.on('channel', channel => {
      let channels = this.state.channels;
        channels.forEach(c => {
          if (c.id === channel.id) {
            c.name = channel.name;
          }
        });
        this.setState({ channels });
    });
    socket.on('message', message => {
      let channels = [...this.state.channels]
      channels.forEach(c => {
        if (c.id === message.channel_id) {
          if (!c.messages) {
            c.messages = [message];
          } else {
            c.messages.push(message);
          }
        }
      });
      this.setState({ ...this.state, channels });
    });
    this.socket = socket;
  }

  handleSendMessage = (channel_id, text) => {
    this.socket.emit('send-message', {channel_id, text, senderName: this.socket.id, id: Date.now() })
  }

  loadChannels = async () => {fetch('http://localhost:8080/getChannels')
  .then(async response => {
    let data = await response.json();
      this.setState({channels: data.channels});
   })
}

handleChannelSelect = id => {
  let channel = this.state.channels.find(c => {
    return c.id === id
  })
  this.setState({ channel });
  this.socket.emit('channel-join', id, ack => {

  });
  


}
  render() {
    return (
      <div className='chat-app'>
      <ChannelList channels={this.state.channels} onselectchannel={this.handleChannelSelect} />
      <MessagesPanel onsendmessage={this.handleSendMessage} channel={this.state.channel} />
      </div>
    )
  }
}


