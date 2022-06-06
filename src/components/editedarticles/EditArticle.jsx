import React, {useContext, useEffect, useState} from 'react';
import Button from "../../UI/button/Button";
import API from "../../API";
import {AuthContext} from "../../context";

const Article = ({value, ...props}) => {
    const {jwt} = useContext(AuthContext)

    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [header, setHeader] = useState('')

    useEffect(() => {
        setHeader(value.header)
        setAuthor(value.author)
        setBody(value.body)
    }, [])

    const approveArticle = (e) => {
        e.preventDefault()
        API.approveArticleByHeaderAndUsername(jwt, header, author)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    const cancelApprove = (e) => {
        e.preventDefault()
        API.deleteArticleByHeaderAndUsername(jwt, header, author)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    return (
        <div {...props} className="article">
            <h1>{header}</h1>
            <p className="author">Author: {author}</p>
            <p>{body}</p>
            <Button onClick={approveArticle}>Approve</Button>
            <Button onClick={cancelApprove}>Reject</Button>
        </div>
    );
};

export default Article;