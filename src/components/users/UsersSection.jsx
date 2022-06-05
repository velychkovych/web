import React from 'react';
import Header from "../Header";
import UsersTable from "./UsersTable";

const UsersSection = () => {
    return (
        <section className="block" id="block">
            <Header>User table</Header>
            <UsersTable/>
        </section>
    );
};

export default UsersSection;