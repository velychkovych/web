import React from 'react';
import Header from "../Header";
import UserForm from "./UserForm";

const UserSection = () => {
    return (
        <section className="block" id="block">
            <Header>Current user info</Header>
            <UserForm/>
        </section>
    );
};

export default UserSection;