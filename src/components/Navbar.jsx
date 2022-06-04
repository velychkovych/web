import React from 'react';
import {Link} from "react-router-dom";
import '../styles/styles.css'

const Navbar = () => {
    return (
        <div className="navigation-bar">
            <ul className="navigation-bar-list">
                <li className="navigation-bar-list-member">
                    <Link className="navigation-btn" to="/login">Login</Link>
                </li>
                <li className="navigation-bar-list-member">
                    <Link className="navigation-btn" to="/signup">Sign up</Link>
                </li>
                <li className="navigation-bar-list-member">
                    <Link className="navigation-btn" to="/user">Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;