import React, {useContext, useEffect, useState} from 'react';
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import {AuthContext} from "../../context";
import API from "../../API";
import SuccessBar from "../SuccessBar";
import {useNavigate} from 'react-router-dom';
import ErrorBar from "../ErrorBar";

const UserForm = () => {
    const {username, jwt} = useContext(AuthContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [editSuccess, setEditSuccess] = useState(false)
    const [nameEmpty, setNameEmpty] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if(username === '' || jwt === '') {
            navigate('/login')
        }
    },[])

    const editUser = (e) => {
        if (firstName === '' || lastName === '') {
            setNameEmpty(true)
        } else {
            setNameEmpty(false)
            e.preventDefault()
            let body = {firstName, lastName};
            if (password !== '') {
                body = {...body, password}
            }
            API.sendEditUserRequest(jwt, username, body)
                .then(_ => setEditSuccess(true))
                .catch(err => console.log(err))
        }
    }

    const deleteUser = (e) => {
        e.preventDefault()
        API.sendDeleteUserRequest(jwt, username)
            .then(_ => {
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    const logout = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    return (
        <div className="form">
            <form>
                <Input
                    disabled
                    type="text"
                    placeholder="Username"
                    value={username}
                />
                <Input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button onClick={editUser}>Edit</Button>
                <Button onClick={deleteUser}>Delete</Button>
                <Button onClick={logout}>Logout</Button>
            </form>
            {editSuccess ?
                <SuccessBar>User edited successfully</SuccessBar> : <div/>}
            {nameEmpty ?
                <ErrorBar>First and last name field should not be empty</ErrorBar> : <div/>}
        </div>
    );
}

export default UserForm;