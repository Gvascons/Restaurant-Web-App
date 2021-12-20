import React, { Component } from 'react'
import DashPage from "../pages/dashPage";
import Login from '../components/user/Login';

export default class Authenticator extends Component{

    render(){
        //CONDITION
        if(0)
            return(
                <div>
                    <Login></Login>
                </div>
            )
        else return(
            <div>
                <DashPage></DashPage>
            </div>
        );
    }
}