import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/usercrud">
                <i className="fa fa-address-card"></i> Cadastro
            </Link>
            <Link to="/login">
                <i className="fa fa-user"></i> Login
            </Link>
            <Link to="/notifications">
                <i className="fa fa-notifications"></i> Notificações
            </Link>
        </nav>
    </aside>