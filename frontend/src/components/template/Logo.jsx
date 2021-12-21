import './Logo.css'
import React from "react"
import logo from "../../assets/images/logo_rest.png"
import { Link } from 'react-router-dom' 

export default props => {
    return (
        <aside className="logo">
            <Link to='/' className='logo'>
                <img src={logo} alt="logo"></img>
            </Link>
        </aside>
    )

}
