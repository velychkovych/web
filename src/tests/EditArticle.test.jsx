import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../context";
import Article from "../components/articles/Article";
import ArticleTextFieldEmpty from "../components/createarticle/ArticleTextFieldEmpty";
import ArticleTextFieldFilled from "../components/editarticle/ArticleTextFieldFilled";


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
            <ArticleTextFieldEmpty/>
        </AuthContext.Provider>
    );

    const header = screen.getByPlaceholderText("Header");
    const text = screen.getByPlaceholderText("Text of article");
    fireEvent.change(header, {target: {value: 'yes'}})
    fireEvent.change(text, {target: {value: 'yes'}})
    fireEvent.click(screen.getByText(/create/i))
});


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
            <ArticleTextFieldFilled/>
        </AuthContext.Provider>
    );


    const text = screen.getByPlaceholderText("Text of article");
    fireEvent.change(text, {target: {value: 'yes'}})
    fireEvent.click(screen.getByText(/edit/i))
});