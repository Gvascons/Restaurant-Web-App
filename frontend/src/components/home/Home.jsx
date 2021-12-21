import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Página Home.">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Realize o login ou crie uma conta para acessar.</p>
    </Main>