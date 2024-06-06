import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    navigate('/');
  };

  return (
    <div className="auth-form">
      <img src="/images/title.png" className="title-img" alt="title-img" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <p>Esqueceu a senha? <Link to="/forgotpassword">Clique aqui!</Link></p>
      <p>Não possui conta? <Link to="/register">Cadastre-se</Link></p>
    </div>
  );
};

export default Login;
