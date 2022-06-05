import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import User from "../pages/User";
import Users from "../pages/Users";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";
import EditArticle from "../pages/EditArticle";
import EditedArticles from "../pages/EditedArticles";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/article/create" element={<CreateArticle/>}/>
            <Route path="/article/edit/:id" element={<EditArticle/>}/>
            <Route path="/articles/approve" element={<EditedArticles/>}/>
            <Route path="/users" element={<Users/>}/> : <Route/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;