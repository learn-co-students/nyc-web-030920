import React from 'react';
import MatchContainer from './MatchContainer';
import { plants } from '../data'
import SearchForm from './SearchForm';

class HomeView extends React.Component {
    state = {
        plants: plants,
        search: ''
    }

    handleSearch = event => this.setState({ search: event.target.value})

    /**
     * 1. something in state to represent the value on the input
     * 2. connect it to the input with the value prop
     * 3. create and connect a handleChange
     */

    render(){
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?
        console.log('homeview state', this.state)

        let filteredPlants = this.state.plants.filter( plant => plant.Common_Name.toLowerCase().includes(this.state.search.toLowerCase()))
        // "any string goes here".includes("") === true
        // let filteredPlants = this.state.plants.filter( plant => plant.Common_Name.toLowerCase() == this.state.search.toLowerCase())

        return (
            <div>
                <input value={this.state.search} placeholder="Search for Plants" onChange={this.handleSearch}/>
                {/* <SearchForm /> */} {/** DO NOT UNCOMMENT THIS LINE UNTIL WORKING ON ADVANCED DELIVERABLES */}
                <MatchContainer plants={filteredPlants}/>
            </div>
        )
    }
}

export default HomeView;