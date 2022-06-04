import React from 'react';
import classes from './Button.module.css';
import {Link} from "react-router-dom";

const CustomLink = ({children, ...props}) => {
    return (
        <Link {...props} className={classes.button}>
            {children}
        </Link>
    );
};

export default CustomLink;