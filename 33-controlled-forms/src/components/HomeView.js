import React from 'react';
import MatchContainer from './MatchContainer';
import { plants } from '../data'
import SearchForm from './SearchForm';

class HomeView extends React.Component {
    state = {
        plants: plants
    }

    render(){
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?

        return (
            <div>
                <input placeholder="Search for Plants"/>
                {/* <SearchForm /> */} {/** DO NOT UNCOMMENT THIS LINE UNTIL WORKING ON ADVANCED DELIVERABLES */}
                <MatchContainer plants={this.state.plants}/>
            </div>
        )
    }
}

export default HomeView;