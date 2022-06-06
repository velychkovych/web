import React, {useContext, useEffect, useState} from 'react';
import Header from "../Header";
import Article from "./Article";
import API from "../../API";
import Button from "../../UI/button/Button";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";

const ArticleSection = () => {
    const {jwt} = useContext(AuthContext)

    const [articles, setArticles] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        API.getAllPostedArticles()
            .then(res => {
                console.log(res)
                setArticles(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const redirectToCreatePost = (e) => {
        e.preventDefault()
        navigate('/article/create')
    }

    return (
        <section className="block" id="block">
            {articles.length ?
                <Header>Articles</Header> : <Header>No articles found</Header>
            }
            <div data-testid="list" className="form">
                {articles.length ?
                    articles.map(article => <Article value={{
                        header: article.header,
                        body: article.body,
                        author: article.author
                    }}/>) : <div/>
                }
            </div>
            {
                jwt !== '' ?
                    <Button onClick={redirectToCreatePost}>Add new post</Button> : <div/>
            }
        </section>
    );
};

export default ArticleSection;