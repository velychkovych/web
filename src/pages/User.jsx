import React, {useContext, useEffect} from 'react';
import '../styles/styles.css'
import UserSection from "../components/user/UserSection";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const User = () => {
    const {jwt} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (jwt === '') {
            navigate('/login')
        }
    }, [])

    return (
        <div className="body">
            <UserSection/>
        </div>
    );
}

export default User;