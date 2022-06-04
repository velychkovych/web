import React from 'react';
import '../styles/styles.css'

const ErrorBar = ({children, ...props}) => {
    return (
        <div {...props} className="error">
            {children}
        </div>
    );
};

export default ErrorBar;