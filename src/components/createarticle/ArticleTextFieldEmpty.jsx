import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import API from "../../API";
import {useNavigate} from "react-router-dom";
import ErrorBar from "../ErrorBar";

const ArticleTextFieldEmpty = (props) => {
    const {username, jwt} = useContext(AuthContext)

    const [header, setHeader] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const createArticle = (e) => {
        if (header === '' || body === '') {
            setError(true)
        } else {
            setError(false)
            e.preventDefault()
            API.createArticle(jwt, header, body)
                .then(_ => navigate('/articles'))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="form">
            <div {...props} className="article">
                <Input
                    type="text"
                    placeholder="Header"
                    value={header}
                    onChange={event => setHeader(event.target.value)}
                    required
                />
                <p className="author">Author: {username}</p>
                <textarea className="change-text" placeholder="Text of article"
                          rows="4" cols="50" maxLength="2000"
                          value={body} onChange={event => setBody(event.target.value)}/>
            </div>
            <Button onClick={createArticle}>Create</Button>
            {
                error ?
                    <ErrorBar>Header and text field should not be empty</ErrorBar> : <div/>
            }
        </div>
    );
};

export default ArticleTextFieldEmpty;