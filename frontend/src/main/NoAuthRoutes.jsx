import React, {Component} from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home';
import UserCrud from "../components/user/UserCrud";
import Login from '../components/user/Login'

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/usercrud" element={<UserCrud />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
    </Routes>
);