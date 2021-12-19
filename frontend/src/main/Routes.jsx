import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home';
import UserCrud from "../components/user/UserCrud";
import Login from '../components/user/Login'

/* */
import AddPage from "../pages/addPage";
import DashPage from "../pages/dashPage";
import EditPage from "../pages/editPage";
/* */

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/usercrud" element={<UserCrud />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
{/* */}
        <Route exact path = "/dash" element={<DashPage />} />
        <Route exact path = "/add" element={<AddPage />} />
        <Route exact path = "/edit" element={<EditPage />} />
{/* */}
    </Routes>
);
