import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../context";
import Article from "../components/articles/Article";


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
            <Article value={article}/>
        </AuthContext.Provider>
    );

    fireEvent.click(screen.getByText(/edit/i))
});

test("should render articls", () => {
    const context = {
        jwt: '',
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
        header: '',
        body: '',
        author: '123'
    }

    render(
        <AuthContext.Provider value={context}>
            <Article value={article}/>
        </AuthContext.Provider>
    );

});