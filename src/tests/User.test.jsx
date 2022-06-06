import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../context";
import User from "../pages/User";

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
            <User/>
        </AuthContext.Provider>
    );


    const first = screen.getByPlaceholderText("First name");
    const last = screen.getByPlaceholderText("Last name");
    const password = screen.getByPlaceholderText("Password");


    fireEvent.click(screen.getByText(/edit/i))
    fireEvent.change(first, {target: {value: 'yes'}})
    fireEvent.change(last, {target: {value: 'yes'}})
    fireEvent.change(password, {target: {value: 'yes'}})
    fireEvent.click(screen.getByText(/edit/i))
    fireEvent.click(screen.getByText(/logout/i))
    fireEvent.click(screen.getByText(/delete/i))
});

test("should rer articles", () => {
    const context = {
        jwt:'',
        role:'admin',
        username: '123',
        setJwt: () => {},
        setUsername: () => {},
        setRole: () => {}
    }

    render(
        <AuthContext.Provider value={context}>
            <User/>
        </AuthContext.Provider>
    );


    const first = screen.getByPlaceholderText("First name");
    const last = screen.getByPlaceholderText("Last name");
    const password = screen.getByPlaceholderText("Password");


    fireEvent.click(screen.getByText(/edit/i))
    fireEvent.change(first, {target: {value: 'yes'}})
    fireEvent.change(last, {target: {value: 'yes'}})
    fireEvent.change(password, {target: {value: 'yes'}})
    fireEvent.click(screen.getByText(/edit/i))
    fireEvent.click(screen.getByText(/logout/i))
    fireEvent.click(screen.getByText(/delete/i))
});
