import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import User from "../pages/User";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/user" element={<User/>}/>
        </Routes>
    );
};

export default AppRouter;