import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import {AuthContext} from "../context";
import Login from "../pages/Login";


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

    render(
        <AuthContext.Provider value={context}>
            <Login/>
        </AuthContext.Provider>
    );

    const inputUsername = screen.getByPlaceholderText("Username");
    const inputPassword = screen.getByPlaceholderText("********");

    fireEvent.click(screen.getByText(/signup/i))
    fireEvent.click(screen.getByText(/login/i))
    fireEvent.change(inputUsername, {target: {value: 'yes'}})
    fireEvent.change(inputPassword, {target: {value: 'yes'}})
    fireEvent.click(screen.getByText(/login/i))
});

