import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

import AuthRoutes from './AuthRoutes'
import NoAuthRoutes from './NoAuthRoutes'

export default (props) => {
  //window.localStorage.setItem('@restaurantes:login', true)
    const token = window.localStorage.getItem('@restaurantes:login')
    console.log(token)
    if (token) {
        return (
            <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <AuthRoutes />
                <Footer />
            </div>
        </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <NoAuthRoutes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}