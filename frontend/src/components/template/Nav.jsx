import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    const token = window.localStorage.getItem('@restaurantes:login')

    if(token) return (
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/dash">
                    <i className="fa fa-home"></i> Início
                </Link>
                <Link to="/notifications">
                    <i className="fa fa-bell"></i> Notificações
                </Link>   
            </nav>
        </aside>
    )
    else return (
        <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/login">
                <i className="fa fa-user"></i> Login
            </Link>
            <Link to="/usercrud">
                <i className="fa fa-address-card"></i> Cadastro
            </Link>
        </nav>
    </aside>
    )
}