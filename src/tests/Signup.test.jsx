import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../context";
import Signup from "../pages/Signup";
import axios from "axios";


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
            <Signup/>
        </AuthContext.Provider>
    );

    const inputUsername = screen.getByPlaceholderText("Username");
    const inputPassword = screen.getByPlaceholderText("Password");
    const confirmPassword = screen.getByPlaceholderText("Confirm password");

    fireEvent.click(screen.getByText(/login/i))
    fireEvent.click(screen.getByText(/signup/i))
    fireEvent.change(inputUsername, {target: {value: 'yes'}})
    fireEvent.change(inputPassword, {target: {value: 'yes'}})
    fireEvent.change(confirmPassword, {target: {value: 'yes'}})
    fireEvent.click(screen.getByText(/signup/i))
});