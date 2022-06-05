import React, {useContext, useEffect, useState} from 'react';
import UsersTableTop from "./UsersTableTop";
import {AuthContext} from "../../context";
import API from "../../API";
import {useNavigate} from "react-router-dom";
import UsersTableMember from "./UsersTableMember";

const UsersTable = () => {
    const {jwt, role} = useContext(AuthContext)

    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (jwt === '' || role !== 'admin') {
            navigate('/login')
        } else {
            API.getAllUsers(jwt)
                .then(res => setUsers(res.data))
                .catch(err => {
                    navigate('/login')
                    console.error(err)
                })
        }
    }, [])

    return (
        <div>
            <table className="table">
                <UsersTableTop/>
                {users.map((user, index) => <UsersTableMember key={index} value={{...user, id: (index + 1)}}/>)}
                    </table>
                    </div>
                    );
                };

                    export default UsersTable;