import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'user',
    title: 'Login',
    subtitle: 'Entre na sua conta!'
}

const baseUrl = 'http://localhost:8000/users'
const initialState = {
    user: { name: '', password: ''},
    list: []
}

export default class UserCrud extends Component {
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
        const method = 'get'
        const url = baseUrl
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
    }

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
                            <input type="text" className="form-control"
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


/*
function Login() {
    return (
      <div className='Login'>
        <form onSubmit={(e) => login(e)}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  function login(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById('exampleInputEmail1').value,
      password: document.getElementById('exampleInputPassword1').value,
    }
    axios.post('http://localhost:8000/login', request)
    .then(resp => {
      alert(resp.data.message);
    })
    .catch (err => {
      console.log(err);
    })
  }
  
  export default Login;
*/
