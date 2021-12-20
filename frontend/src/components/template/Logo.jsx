import './Logo.css'
import React from "react"
import logo from "../../assets/images/logo_rest.png"
import { Link } from 'react-router-dom' 

export default props => {
    const token = window.localStorage.getItem('@restaurantes:login')
    
    if (token) return (
        <aside className="logo">
            <Link to='/' className='logo'>
                <img src={logo} alt="logo"></img>
            </Link>
        </aside>
    )
    else return (
        <aside className="logo">
            <Link to='/' className='logo'>
                <img src={logo} alt="logo"></img>
            </Link>
        </aside>
    )

}
