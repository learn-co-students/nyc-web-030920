import React from 'react';
import './App.css';
import { Nav, MessageContainer, ChannelsContainer } from './components'
import { fetchChannels } from './requests';

class App extends React.Component {
  state = {
    channels: [],
    selectedChannelId: null // 5 b/c minimum piece of info we need to track to get the right obj from this.state.channels
  }

  componentDidMount(){
    fetchChannels()
      .then(data => this.setState({ channels: data }))
    // fetch.then().catch()
  }

  selectChannel = (id) => {
    // TODO: What does this method need to do in order to represent the selected channel?
    this.setState({ selectedChannelId: id })
  }

  render() {
    // console.log(this.state)
    let selectedChannelObj = this.state.channels.find(ch => ch.id === this.state.selectedChannelId)

    return (
      <div className="App">
        <Nav />
        <div className="simple-flex-row main">
          <ChannelsContainer 
            selectChannel={this.selectChannel}
            selectedChannel={this.state.selectedChannelId} 
            channels={this.state.channels}/>
          <MessageContainer 
            selectedChannel={selectedChannelObj} />
        </div>
      </div>
    );
  }
}

export default App;
