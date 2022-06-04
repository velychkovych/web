import React from 'react';
import classes from './Reference.module.css'
import {Link} from "react-router-dom";

const Reference = ({children, ...props}) => {
    return (
        <Link {...props} className={classes.reference}>
            {children}
        </Link>
    );
};

export default Reference;