import React from 'react';
import '../styles/styles.css'

const Header = ({children, ...props}) => {
    return (
        <div className="head">
            <h1 {...props} className="company">{children}</h1>
        </div>
    );
};

export default Header;