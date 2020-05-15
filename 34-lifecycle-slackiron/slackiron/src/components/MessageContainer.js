import React from 'react';
import { fetchChannelMessages } from '../requests';
import { Message } from '../components'


class MessageContainer extends React.Component {
    state = {
        messages: [],
        viewingTime: 0, // advanced deliverable
        intervalId: null // advanced deliverable
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, this.props)
        if(this.props.selectedChannel){ // ONLY if we have a selected channel in this.props
            if(!prevProps.selectedChannel || prevProps.selectedChannel.id !== this.props.selectedChannel.id){
                // if( previous channel was null OR channelId has changed )
                fetchChannelMessages(this.props.selectedChannel.id)
                    // fetch my messages using the channel id and set state
                    .then(data => this.setState({ messages: data }))
            }
        }
    }

    renderChannelInfo = () => {
        const { selectedChannel } = this.props;
        return (
            selectedChannel  // TODO: what should the condition be here? why do we need a condition at all?
                ? <div>{selectedChannel.name} {selectedChannel.starred ? '⭐️' : '✩'}</div>
                : <div>Please select a channel</div>
        )
    }

    render(){
        console.log('message container props', this.props)
        return (
            <div className="messages container">
                <h2>Messages</h2>
                {this.renderChannelInfo()}
                <div>
                    {this.state.messages.map(message => (
                        <Message key={message.id} {...message}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default MessageContainer;