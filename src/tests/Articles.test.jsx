import React from "react";
import {fireEvent, render, screen, waitForElement} from "@testing-library/react";
import Articles from "../pages/Articles";
import {AuthContext} from "../context";
import ArticleSection from "../components/articles/ArticleSection";


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

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
            <Articles/>
        </AuthContext.Provider>
    );


    fireEvent.click(screen.getByText(/add new post/i))
});