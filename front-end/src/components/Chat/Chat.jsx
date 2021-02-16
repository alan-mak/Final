import React, { useEffect } from 'react';
import { ChannelList } from './ChannelList';
import  { MessagesPanel } from './MessagesPanel';

export class Chat extends React.Component {
  state = {
    channels: [{id: 1, name: "user"}]
  }

  componentDidMount() {
    this.loadChannels();
  }

  loadChannels = async () => {fetch('http://localhost:8080/getChannels')
  .then(async response => {
    let data = await response.json();
      this.setState({channels: data.channels});
   })
}

handleChannelSelect = id => {
  this.socket.emit('channel-join', id, ack => {

  })
}
  render() {
    return (
      <div className='chat-app'>
      <ChannelList channels={this.state.channels} />
      <MessagesPanel />
      </div>
    )
  }
}


