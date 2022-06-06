import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import '../styles/styles.css'
import EditArticleSection from "../components/editarticle/EditArticleSection";

const EditArticle = () => {
    const {jwt} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (jwt === 'admin') {
            navigate('/articles')
        }
    },[])

    return (
        <div className="body">
            <EditArticleSection/>
        </div>
    );
};

export default EditArticle;