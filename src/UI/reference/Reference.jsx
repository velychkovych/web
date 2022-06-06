import React from 'react';
import classes from './Reference.module.css'
import {useNavigate} from "react-router-dom";

const Reference = ({children,to, ...props}) => {
    const navigate = useNavigate()

    const redirect = (e) => {
        e.preventDefault()
        navigate(to)
    }

    return (
        <button {...props} onClick={redirect} className={classes.reference}>
            {children}
        </button>
    );
};

export default Reference;