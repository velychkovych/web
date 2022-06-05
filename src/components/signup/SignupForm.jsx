import React, {useContext, useEffect, useState} from 'react';
import Input from "../../UI/input/Input";
import Reference from "../../UI/reference/Reference";
import '../../styles/styles.css'
import API from "../../API";
import Button from "../../UI/button/Button";
import {useNavigate} from "react-router-dom";
import ErrorBar from "../ErrorBar";
import {AuthContext} from "../../context";

const SignupForm = () => {
    const {setJwt, setUsername, setRole} = useContext(AuthContext)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setJwt('')
        setUsername('')
        setRole('')
    }, [])

    const sendSignupRequest = () => {
        if (password === confirmPassword &&
            login !== '' && password !== '') {
            API.sendSignupRequest(login, password)
                .then(res => {
                    if (res.status === 200) {
                        navigate('/login')
                    }
                }).catch(err => {
                setError(true)
                console.log(err)
            })
        }
        setLogin('')
        setPassword('')
        setConfirmPassword('')
    }


    return (
        <div className="form">
            <form>
                <Input
                    type="text"
                    placeholder="Username"
                    value={login}
                    onChange={event => setLogin(event.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    required
                />
                <Button to="/login" onClick={sendSignupRequest}>Signup</Button>
                <Reference to="/login">Login</Reference>
            </form>
            {error ?
                <ErrorBar>Username is already taken</ErrorBar> : <div/>
            }
        </div>
    );
};

export default SignupForm;