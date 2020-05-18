import React from 'react';

const Filter = props => {
    const { onlyFavs, handleFilterChange } = props;
    return (
        <div className="simple-flex-row">
            <label> Genre: 
                <select>
                    <option>Hip Hop</option>
                    <option>Pop</option>
                    <option>R&B</option>
                </select>
            </label>
            <label> Favorites? 
                <select value={onlyFavs} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Faves">Just Favs</option>
                </select>
            </label>
        </div>
    )
}

export default Filter;