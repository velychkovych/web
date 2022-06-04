import React, {useContext, useState} from 'react';
import Reference from "../../UI/reference/Reference";
import Input from "../../UI/input/Input";
import API from '../../API'
import Button from "../../UI/button/Button";
import {useNavigate} from 'react-router-dom'
import ErrorBar from "../ErrorBar";
import {AuthContext} from "../../context";

const LoginForm = () => {
    const {setJwt, setUsername, setRole} = useContext(AuthContext)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const sendLoginRequest = (e) => {
        e.preventDefault()
        if (login === '' || password === '') {
            setError(true)
        } else {
            API.sendLoginRequest(login, password)
                .then(res => {
                    if (res.status === 200) {
                        setJwt(res.data.jwt)
                        setUsername(res.data.user.username)
                        setRole(res.data.user.role)
                        navigate('/user')
                    } else {
                        setError(true)
                    }
                })
                .catch(err => console.error(err))
        }
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
                    placeholder="********"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
                <Button onClick={sendLoginRequest}>Login</Button>
                <Reference to="/signup">Signup</Reference>
            </form>
            {error ?
                <ErrorBar>Incorrect username or password</ErrorBar> : <div/>
            }
        </div>
    );
}

export default LoginForm;