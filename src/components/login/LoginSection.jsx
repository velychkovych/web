import React from 'react';
import Header from "../Header";
import LoginForm from "./LoginForm";

const LoginSection = () => {
    return (
        <section className="block" id="block">
            <Header>Simple article service</Header>
            <LoginForm/>
        </section>
    );
};

export default LoginSection;