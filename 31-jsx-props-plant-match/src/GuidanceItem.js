import React from 'react';

class GuidanceItem extends React.Component {
    // console.log('props in guidance item', props)
    // props.factor should look like { title: '', image: '', description: '', stars: 5}

    state = {
        // data that needs to be tracked, needs to be able to change, and is not provided elsewhere
        clicked: false
    }
    
    handleClick = (event) => {
        let clientX = event.clientX
        event.persist()
        
        setTimeout(() => console.log(event.clientX, clientX), 1500)

        // WRONG MUTATION ==> this.state.clicked = true
        this.setState({ clicked: !this.state.clicked }) 
        // asynchronous and takes an object of key:value pairs you want to update
        // after update, rerenders the component 
        console.log('after', this.state)
    }
    
    render() {
        console.log('guidance item state', this.state)
        const { title, image, description, stars, isPriority } = this.props.factor
        return (
            <tr onClick={this.handleClick} style={{backgroundColor: this.state.clicked ? 'teal' : 'transparent'}}>
                <td>{title}</td>
                <td><img src={image} alt={title}/></td>
                <td>{description}</td>
                <td>{'⭐️'.repeat(stars)}</td>
                <td>{isPriority ? "YES" : "NO"}</td>
            </tr>
        )
    }
}

export default GuidanceItem;