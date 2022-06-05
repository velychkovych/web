import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../styles/styles.css'
import {AuthContext} from "../context";

const Navbar = () => {
    const {role} = useContext(AuthContext)

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
                    <Link className="navigation-btn" to="/user">User info</Link>
                </li>
                {role === 'admin' ?
                    <li className="navigation-bar-list-member">
                        <Link className="navigation-btn" to="/users">User list</Link>
                    </li> : <div/>
                }
            </ul>
        </div>
    );
}

export default Navbar;