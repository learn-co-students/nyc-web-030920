import React from 'react';

const FeaturedContainer = props => {
    return (
        <div className="featured-container">
            <h2>Up-and-coming Communities</h2>
            <ol className="featured-list">
                {props.subreddits
                    .sort((a, b) => a.numUsers > b.numUsers ? -1 : 1 )
                    .map(subr => (
                        <li key={subr.id}> r/{subr.name}: {subr.numUsers} users</li>
                ))}
            </ol>
        </div>
    )
}

export default FeaturedContainer;