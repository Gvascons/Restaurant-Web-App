import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

import AuthRoutes from './AuthRoutes'
import NoAuthRoutes from './NoAuthRoutes'

let idAdm = Number(localStorage.getItem('idAdm')); 

const baseUrl = 'http://localhost:8000/login';

const App = () => {
    const [lastId, setLastId] = useState(-1)
    const [initId, setInitId] = useState(-1)

    useEffect(() => {
        const method = 'get'
            const url = baseUrl
            axios[method](url)
                .then(response => {
                    if(response.data){
                        response.data.forEach(item => {
                            let lengthArray = item.notifications.length
                            if(lengthArray!=0 && idAdm==item.id) setInitId(item.notifications[lengthArray-1].id)
                        })
                    }
                })
    }, []);

    useEffect(() => {
        setInterval(() => {
            const method = 'get'
            const url = baseUrl
            axios[method](url)
                .then(response => {
                        if (response.data) {
                            response.data.forEach(item => {
                                let lengthArray = item.notifications.length

                                if (idAdm == item.id) {
                                    if(lengthArray!=0){
                                        if (lastId == -1 || lastId != -1 && lastId != item.notifications[lengthArray-1].id) {
                                            setLastId(item.notifications[lengthArray-1].id);
                                        }
                                    }
                                }
                            })
                        }
                });
        }, 1000);
    }, []);

    useEffect(() => {
        if(lastId !=-1 && lastId!=initId){
            window.location.reload()
            alert("Novo pedido !");
        }
    }, [lastId])

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

export default App;