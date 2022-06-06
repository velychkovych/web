import React, {useContext, useEffect, useState} from 'react';
import Button from "../../UI/button/Button";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";


const Article = ({value, ...props}) => {
    const {jwt} = useContext(AuthContext)

    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [header, setHeader] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        setHeader(value.header)
        setAuthor(value.author)
        setBody(value.body)
    },[])

    const editArticle = (e) => {
        e.preventDefault()
        navigate(`/article/edit/${header}`)
    }

    return (
        <div {...props} className="article">
            <h1>{header}</h1>
            <p className="author">Author: {author}</p>
            <p>{body}</p>
            {
                jwt !== '' ?
                    <Button onClick={editArticle}>Edit</Button> : <div/>
            }
        </div>
    );
};

export default Article;