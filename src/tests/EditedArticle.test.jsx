import React from "react";
import {render} from "@testing-library/react";
import {AuthContext} from "../context";
import EditArticle from "../components/editedarticles/EditArticle";


const mockedUsedNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test("should render articles", () => {
    const context = {
        jwt: '123',
        role: 'admin',
        username: '123',
        setJwt: () => {
        },
        setUsername: () => {
        },
        setRole: () => {
        }
    }

    const article = {
        header: '123',
        body: '123',
        author: '123'
    }

    render(
        <AuthContext.Provider value={context}>
            <EditArticle value={article}/>
        </AuthContext.Provider>
    );
});