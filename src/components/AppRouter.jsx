import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import User from "../pages/User";
import Users from "../pages/Users";
import {AuthContext} from "../context";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    const {jwt, role} = useContext(AuthContext)

    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {
                jwt !== '' ?
                    <Route path="/user" element={<User/>}/> : <Route/>
            }
            {
                role === 'admin' ?
                    <Route path="/users" element={<Users/>}/> : <Route/>
            }
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;