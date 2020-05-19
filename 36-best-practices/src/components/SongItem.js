import React from 'react';

class SongItem extends React.Component {
    state = {
        likes: 0 
    }

    addLike = () => {
        this.setState(prevState => ({ likes: prevState.likes + 1 })) 

        /**
         * () => {  this is now a code body and needs to explicitly return }
         * use parens to implicit return an object
         * () => ({ name: 'caryn', sign: 'gemini' })
         */

        if(this.props.favorite){
            this.setState(prevState => ({ likes: prevState.likes + 2 }))
        }

        // SET STATE CALLBACK
        // this.setState({ likes: this.state.likes + 1 }, () => {
        //     console.log('this is my "then" callback to setState')
        //     console.log('runs once state finishes updating: ', this.state)
        // })
        // console.log('on the line after setstate: ', this.state)
    }

    // send a patch request to songs/:id
    // pesimistically update the song so the heart is toggled 

    render(){
        console.log('LIKES: ',this.state.likes)
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