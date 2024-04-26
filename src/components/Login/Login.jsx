import {FaUser, FaLock} from 'react-icons/fa'

import { useState } from 'react';

import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    console.log(email, password)
  }

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<h1>Acesse o sistema</h1>
				<div className='input-field'>
					<input
						type="email"
						placeholder="Seu e-mail"
						onChange={e => setEmail(e.target.value)}
					/>
					<FaUser className="icon" />
				</div>
				<div className='input-field'>
					<input
						type="password"
						placeholder="Sua senha"
						onChange={e => setPassword(e.target.value)}
					/>
					<FaLock className="icon" />
				</div>

				<div className="recall-forget">
					<label>
						<input type="checkbox" />
						Manter login
					</label>
					<a href="#">Esqueci a minha senha</a>
				</div>

				<button>Entrar</button>

				<div className="signup-link">
					<p>
						Não tem uma conta? <a href="#">Registrar-se</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
