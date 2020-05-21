import React from 'react';

const API = 'http://localhost:7001/cats'


class PetProfile extends React.Component {
    state = {
        pet: null
    }

    componentDidMount() {
        /** TODO: Make this dynamic! Use the id param of the URL to fetch the correct cat!  */

        // let { allPets } = this.props
        // allPets.find(pet => pet.id === parseInt(this.props.match.params.id) ) // 5 !== '5'

        fetch(`${API}/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(pet => this.setState({ pet }))
    }

    renderPet = () => {
        const { image, name, happiness, description, isAdopted } = this.state.pet;
        console.log('Profile', this.props)
        return (
            
                <div className="pet-page">
                    <img className="page-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
                    <div className="page-info">
                        <h2>{name}</h2>
                        <div>How's {name} doing today? {happiness > 0 ? '❤️'.repeat(happiness) : '😿'}</div>
                        <div><b>{name}</b> says {description}</div>
                        <div className={isAdopted ? '' : 'highlight'}>{isAdopted ? 'No Longer up for Adoption' : 'Up for Adoption!'}</div>
                    </div>
                    <div>
                        <span>⬅️</span>
                        <span>➡️</span>
                    </div>
                    <button onClick={() => this.props.history.push('/pets')}>Go Back</button>
                    {/** to enable this button
                     * ... just make it a Link to /pets
                     * ... use history 
                     */}
                </div>
                

        )
    }

    render(){
        return this.state.pet ? this.renderPet() : <div> No Pet Selected... Try going back to our Pets! </div>
    }
}

export default PetProfile;