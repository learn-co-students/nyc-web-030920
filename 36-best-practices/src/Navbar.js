import React from 'react';

const Navbar = props => {
    return (
        <div className="simple-flex-row">
            <button onClick={props.fetchSongs}>Get Songs</button> 
            <h1>S-not-ify 🐽</h1>
            <input value={props.search} onChange={props.handleSearch} placeholder="Search by title or artist..."/>
        </div>
    )
}

export default Navbar