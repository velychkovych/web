import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../context";
import CreateArticle from "../pages/CreateArticle";


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test("should render articles", () => {
    const context = {
        jwt:'123',
        role:'admin',
        username: '123',
        setJwt: () => {},
        setUsername: () => {},
        setRole: () => {}
    }

    render(
        <AuthContext.Provider value={context}>
            <CreateArticle/>
        </AuthContext.Provider>
    );

    const text = screen.getByPlaceholderText("Text of article")
    const header = screen.getByPlaceholderText("Header")
    fireEvent.change(text, {target: {value: 'yes'}})
    fireEvent.change(header, {target: {value: 'yes'}})
    fireEvent.click(screen.getByText('Create'))
});