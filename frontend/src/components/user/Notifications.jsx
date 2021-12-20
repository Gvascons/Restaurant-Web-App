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

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
            
        })
    }

    getNotifications() {
        const method = 'get'
        const url = baseUrl
        axios[method](url)
            .then( (response) => {
                const arrayLength = response.data.length;
                for (var i = 0; i < arrayLength; i++)
                    if(idAdm === response.data[i].id){
                        allNotifications = response.data[i].notifications
                        allNotifications.reverse()
                        this.setState({
                            notifications: response.data[i].notifications
                        })
                        console.log(allNotifications)
                        return
                    }
            });
    }

    renderForm = () => {
        return (
            <div className="form">
                <div className="col-12 col-md-6">
                    <List>
                        {this.notifications.map((data) => (
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
                {this.renderForm()}
            </Main>
        )
    }
}

