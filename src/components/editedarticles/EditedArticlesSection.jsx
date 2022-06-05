import React, {useContext, useEffect, useState} from 'react';
import Header from "../Header";
import API from "../../API";
import {AuthContext} from "../../context";
import EditArticle from "./EditArticle";

const EditedArticlesSection = () => {
    const {jwt} = useContext(AuthContext)

    const [articles, setArticles] = useState([])

    useEffect(() => {
        API.getAllEditedArticles(jwt)
            .then(res => {
                console.log(res)
                setArticles(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <section className="block" id="block">
            {articles.length ?
                <Header>Articles</Header> : <Header>No articles found</Header>
            }
            <div className="form">
                {articles.length ?
                    articles.map(article => <EditArticle value={{
                        header: article.header,
                        body: article.body,
                        author: article.author
                    }}/>) : <div/>
                }
            </div>
        </section>
    );
};

export default EditedArticlesSection;