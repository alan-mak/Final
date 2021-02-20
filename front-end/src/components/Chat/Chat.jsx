import React, { useEffect } from 'react';
import { ChannelList } from './ChannelList';
import  { MessagesPanel } from './MessagesPanel';
import socketClient from 'socket.io-client';
import './Chat.scss';



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
    const SERVER = "http://localhost:3005"
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
      console.log("message is here: ", message);
      let channels = [...this.props.rooms]
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
    let id = Date.now();
    this.socket.emit('send-message', {channel_id, text, senderName: this.socket.id, id: id })
  }

  loadChannels = async () => {fetch('http://localhost:3005/getChannels')
  .then(async response => {
    let data = await response.json();
      this.setState({channels: data.channels});
   })
}

handleChannelSelect = id => {
  let channel = this.props.rooms.find(c => {
    return c.id === id
  })
  this.setState({ channel });
  this.socket.emit('channel-join', id, ack => {
  });

  const handleChannelCreate = (id, name) => {
    let channels = [...this.state.channels]
    let newChannel = {id: id, name: name, socket:[]}
    channels.push(newChannel);
    this.setState({ channels })
    this.props.setRooms({ channels })
  };


}
  render() {
    return (
      <div className='chat-app'>
        <p>View your chats with other users here!</p>
      <ChannelList channels={this.props.rooms} onselectchannel={this.handleChannelSelect} />
      <MessagesPanel onsendmessage={this.handleSendMessage} channel={this.state.channel} />
      </div>
    )
  }
}


