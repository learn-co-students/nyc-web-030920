import React from 'react';

class SongItem extends React.Component {
    state = {
        likes: 0 
    }

    addLike = () => {
        this.setState({ likes: this.state.likes + 1 })
    }

    // send a patch request to songs/:id
    // pesimistically update the song so the heart is toggled 

    render(){
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.artist}</td>
                <td><button onClick={() => this.props.chooseSong(this.props.id)}>Play Now</button></td>
                <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                <td onClick={() => this.props.updateSong(this.props.id, !this.props.favorite)}>{this.props.favorite ? "💚" : "♡"}</td>
                <td onClick={this.addLike}>Likes: {this.state.likes}</td>
            </tr>
        )
    }
}

export default SongItem;