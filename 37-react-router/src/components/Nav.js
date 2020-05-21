import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// NavLink gives us some tools for active styling 

const Nav = props => {
    /**
     * TODO:
     * For each div below, decide if it should navigate the user to a specific page
     * Then, use the tools from React Router so when the user clicks on the text, it navigates them to that path
     */
    return (
        <div className="simple-flex-row">
            <Link to="/">🐰🐱🐶🐹☕️🍵</Link>
            <Link to="/">Home</Link>
            <Link to="/pets">Pets</Link>
            <div className="simple-flex-row right-corner">
                <Link to="/login">Login</Link>
                <Link to="/help">?</Link>
            </div>
        </div>
    )
}

export default Nav;