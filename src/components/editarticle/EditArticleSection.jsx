import React from 'react';
import Header from "../Header";
import ArticleTextFieldFilled from "./ArticleTextFieldFilled";

const EditArticleSection = () => {
    return (
        <section className="block" id="block">
            <Header>Edit article</Header>
            <ArticleTextFieldFilled/>
        </section>
    );
};

export default EditArticleSection;