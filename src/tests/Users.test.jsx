import React from "react";
import {render} from "@testing-library/react";
import {AuthContext} from "../context";
import Users from "../pages/Users";


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
            <Users/>
        </AuthContext.Provider>
    );
});

test("shder articles", () => {
    const context = {
        jwt:'123',
        role:'adin',
        username: '123',
        setJwt: () => {},
        setUsername: () => {},
        setRole: () => {}
    }

    render(
        <AuthContext.Provider value={context}>
            <Users/>
        </AuthContext.Provider>
    );
});