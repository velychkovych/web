import React, {useContext, useEffect} from 'react';
import '../styles/styles.css'
import UsersSection from "../components/users/UsersSection";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Users = () => {
    const {role} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if(role !== 'admin'){
            navigate('/user')
        }
    },[])

    return (
        <div className="body">
            <UsersSection/>
        </div>
    );
}

export default Users;