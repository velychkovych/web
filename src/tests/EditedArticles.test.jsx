import React from "react";
import {render, waitForElement} from "@testing-library/react";
import {AuthContext} from "../context";
import EditedArticles from "../pages/EditedArticles";

const mockedUsedNavigate = jest.fn();

// jest.mock('../API', () => ({
//     __esModule: true,
//     default: () => getArticles
// }))
//
// const getArticles = jest.fn(() => {
//     return new Promise(resolve => {
//         const article = [{
//             header: 'header',
//             body: 'body',
//             author: 'author'
//         }]
//         resolve(article)
//     })
// })

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
            <EditedArticles/>
        </AuthContext.Provider>
    );

    // waitForElement(() => getByTestId('list'))
});