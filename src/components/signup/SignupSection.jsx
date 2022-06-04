import React from 'react';
import Header from "../Header";
import SignupForm from "./SignupForm";

const SignupSection = () => {
    return (
        <section className="block" id="block">
            <Header>Make up a username and password</Header>
            <SignupForm/>
        </section>
    );
};

export default SignupSection;