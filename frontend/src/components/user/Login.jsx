import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import RestaurantService from '../../service/restaurant'



const headerProps = {
    icon: 'user',
    title: 'Login',
    subtitle: 'Entre na sua conta!'
}

const baseUrl = 'http://localhost:8000/login'
const initialState = {
    user: { name: '', password: ''},
    list: [], authenticated: false
}

export default class Login extends Component {
    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    login() {
        const user = this.state.user
        const method = 'post'
        const url = baseUrl
        //axios.post(url,this.state.user)
        axios[method](url,user)
            .then(res => {
                window.localStorage.setItem('@restaurantes:login', true)
                RestaurantService.getAdmById(res.data.message[1])
                localStorage.setItem('idAdm',res.data.message[1])
                //alert(res.data.message[0])
                this.redirect()
            })
            .catch(err => alert(err))
        }

    redirect() {
        window.location.href="/dash"
    }
        /*
        axios[method](url)
            .then(function (response) {
                const arrayLength = response.data.length;
                for (var i = 0; i < arrayLength; i++)
                    if(user.name === response.data[i].name && user.password === response.data[i].password){
                        alert('Deu tudo certo!')
                        return
                    }
                alert('Algum dado não está correto!')
            });
        */


    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = {...this.state.user}
        user[event.target.name] =  event.target.value
        this.setState({user})
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control"
                                name="password"
                                value={this.state.user.password}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a senha..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.login()}>
                            Login
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
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