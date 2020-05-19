import React from 'react';

const Navbar = props => {
    return (
        <form className="simple-flex-row"  onChange={props.handleSearch}>
            <button onClick={props.fetchSongs}>Get Songs</button> 
            <h1>S-not-ify 🐽</h1>
            <input name="search" value={props.search} placeholder="Search by title or artist..."/>
        </form>
    )
}

export default Navbar