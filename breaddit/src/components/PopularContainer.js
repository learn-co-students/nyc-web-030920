import React from 'react';
import Filter from './Filter';
import Post from './Post';
import { POSTS_WITH_USER } from '../requests'

class PopularContainer extends React.Component {
    state = {
        posts: [],
        sortByLikes: false
    }

    toggleLikesSort = () => {
        this.setState({ sortByLikes: !this.state.sortByLikes })
    }

    fetchPosts = () => {
        fetch(POSTS_WITH_USER)
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }

    render() {
        console.log('popular state', this.state)
        // make a copy using the spread operator b/c sort works in place and we can't mutate state
        let postsToDisplay = [...this.state.posts]

        if(this.state.sortByLikes){ // if sortByLikes is true, sort my postsToDisplay
            postsToDisplay.sort( (a,b) => a.likes > b.likes ? -1 : 1 )
        }

        return (
            <div className="popular-container">
                PopularContainer
                <button onClick={this.fetchPosts}>Get Posts</button>
                <Filter 
                    subreddits={this.props.subreddits}
                    sortByLikes={this.state.sortByLikes}
                    toggleLikesSort={this.toggleLikesSort}/>
                <div className="popular-list">
                    {postsToDisplay.map(post => <Post key={post.id} {...post}/>)}
                </div>
            </div>
        )
    }
}

export default PopularContainer;


// PASS BY REFERENCE VS PASS BY VALUE ASIDE 
 // // difference places in memory
        // let num1 = 5
        // let num2 = num1 

        // // same place in memory
        // let arr1 = [1,2,3,4,5]
        // let arr2 = arr1 
        // arr1.push(6,7,8)

        // pass by value  like numbers, strings
        //  v pass by reference 