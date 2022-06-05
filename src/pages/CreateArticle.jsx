import React, {useContext, useEffect} from 'react';
import CreateArticleSection from "../components/createarticle/CreateArticleSection";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import '../styles/styles.css'

const CreateArticle = () => {
    const {jwt} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (jwt === '') {
            navigate('/articles')
        }
    },[])

    return (
        <div className="body">
            <CreateArticleSection/>
        </div>
    );
};

export default CreateArticle;