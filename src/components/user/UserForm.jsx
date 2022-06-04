import React, {useContext, useState} from 'react';
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import {AuthContext} from "../../context";
import API from "../../API";
import SuccessBar from "../SuccessBar";
import {useNavigate} from 'react-router-dom';

const UserForm = () => {
    const {username, setUsername, role, setRole, jwt, setJwt} = useContext(AuthContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [editSuccess, setEditSuccess] = useState(false)

    const navigate = useNavigate()

    const editUser = (e) => {
        e.preventDefault()
        API.sendEditUserRequest(jwt, username, firstName, lastName)
            .then(_ => setEditSuccess(true))
            .catch(err => console.log(err))
    }

    const deleteUser = (e) => {
        e.preventDefault()
        API.sendDeleteUserRequest(jwt, username)
            .then(_ => {
                setUsername('')
                setRole('')
                setJwt('')
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    const logout = (e) => {
        e.preventDefault()
        setUsername('')
        setRole('')
        setJwt('')
        navigate('/login')
    }

    return (
        <div className="form">
            <form>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={username}
                    required
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
                    value="*******"
                    required
                />
                <Button onClick={editUser}>Edit</Button>
                <Button onClick={deleteUser}>Delete</Button>
                <Button onClick={logout}>Logout</Button>
            </form>
            {editSuccess ?
                <SuccessBar>User edited successfully</SuccessBar> : <div/>}
        </div>
    );
}

export default UserForm;