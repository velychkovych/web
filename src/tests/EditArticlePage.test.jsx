import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../context";
import Article from "../components/articles/Article";
import EditArticle from "../pages/EditArticle";

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

test("should render artices", () => {
    const context = {
        jwt: '123',
        role: 'admi',
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

