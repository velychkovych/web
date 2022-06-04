import React, {useState} from 'react';
import Input from "../../UI/input/Input";
import Reference from "../../UI/reference/Reference";
import '../../styles/styles.css'
import API from "../../API";
import Button from "../../UI/button/Button";
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const sendSignupRequest = () => {
        if (password === confirmPassword) {
            API.sendSignupRequest(login, password)
                .then(res => navigate('/login'))
                .catch(err => console.log(err))
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
        </div>
    );
};

export default SignupForm;