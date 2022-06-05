import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import API from "../../API";
import {useNavigate, useParams} from "react-router-dom";
import ErrorBar from "../ErrorBar";

const ArticleTextFieldFilled = (props) => {
    const {username, jwt} = useContext(AuthContext)
    const {id} = useParams()

    const [header, setHeader] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const editArticle = (e) => {
        e.preventDefault()
        if (header === '' || body === '') {
            setError(true)
        } else {
            setError(false)
            API.updateArticle(jwt, header, body)
                .then(_ => navigate('/articles'))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        API.getArticleByHeader(jwt, id)
            .then(res => {
                setHeader(res.data.header)
                setBody(res.data.body)
            })
            .catch(err => console.error(err))
    },[])

    return (
        <div className="form">
            <div {...props} className="article">
                <Input
                    disabled
                    type="text"
                    placeholder="Header"
                    value={header}
                />
                <p className="author">Author: {username}</p>
                <textarea className="change-text" placeholder="Text of article"
                          rows="4" cols="50" maxLength="2000"
                          value={body} onChange={event => setBody(event.target.value)}/>
            </div>
            <Button onClick={editArticle}>Edit</Button>
            {
                error ?
                    <ErrorBar>Text field should not be empty</ErrorBar> : <div/>
            }
        </div>
    );
};

export default ArticleTextFieldFilled;