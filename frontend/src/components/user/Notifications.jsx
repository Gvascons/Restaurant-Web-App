import React, { Component } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'user',
    title: 'Notificações',
    subtitle: 'Suas notificações'
}

let idAdm = Number(localStorage.getItem('idAdm'));
const userId = 1; 

const baseUrl = 'http://localhost:8000/login';

var allNotifications = [];

export default class Notifications extends Component {

    intervalID;

    constructor(props) {     
        super(props);     
        this.state = {
            notifications: []
        };   
    }

    componentDidMount() {
        const method = 'get'
        const url = baseUrl
        axios[method](url)
            .then(response => {
                console.log(response.data)

                if (response.data) {
                    response.data.forEach(item => {
                        if (idAdm == item.id) {
                            this.setState({
                                notifications: [...item.notifications].reverse()
                            })
                        }
                    })
                }
            });
    }

    renderForm = () => {
        return (
            <div className="form">
                <div className="col-12 col-md-6">
                    <List>
                        {allNotifications && allNotifications.map((data) => (
                            <ListItem key={data.id}>
                            <p>{data.title} - </p>
                            <p>{data.content}</p>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                <div className="form">
                    <div className="col-12 col-md-6">
                        <List>
                            {this.state.notifications.map((data) => (
                                <ListItem key={data.id}>
                                <p>{data.title} - </p>
                                <p>{data.content}</p>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </Main>
        )
    }
}
