import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <section className="login">
                <Header />
                <form action="" className="login__form">
                    <h1>Acesse com seu login ou cadastre-se!</h1>
                    <h2>Você pode entrar com o seu CPF</h2>
                    <div className="login__input-wrapper">
                        <label htmlFor="name">Digite o seu CPF:</label>
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            id="name"
                            className="login__input-name"
                        />
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder='**********'/>
                    </div>
                    <button type='submit'>
                        <Link to={"/home"}>Entrar</Link>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Login