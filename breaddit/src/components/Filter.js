import React from 'react';

const Filter = props => {
    // props.subreddits
    const { subreddits, sortByLikes, toggleLikesSort } = props;
    return (
        <div>
            <button onClick={toggleLikesSort}>{sortByLikes ? `Hot🔥` : `Unsorted`}</button>
            <label>
                Subreddit:
                <select>
                    <option>All</option>
                    {subreddits.map(subr => <option key={subr.id} value={subr.name}>{subr.name}</option>)}
                </select>
            </label>
            <label>
                State:
                <select>
                    <option>All</option>
                    <option>NY</option>
                    <option>CA</option>
                    <option>GA</option>
                </select>
            </label>
        </div>
    )
}

export default Filter;