import React from 'react';
import '../styles/styles.css'

const SuccessBar = ({children, ...props}) => {
    return (
        <div {...props} className="success">
            {children}
        </div>
    );
};

export default SuccessBar;