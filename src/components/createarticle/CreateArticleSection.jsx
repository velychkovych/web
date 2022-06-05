import React from 'react';
import ArticleTextFieldEmpty from "./ArticleTextFieldEmpty";
import Header from "../Header";

const CreateArticleSection = () => {
    return (
        <section className="block" id="block">
            <Header>Create article</Header>
            <ArticleTextFieldEmpty/>
        </section>
    );
};

export default CreateArticleSection;