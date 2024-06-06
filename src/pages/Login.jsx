// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione lógica de autenticação aqui
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
      <p>Esqueceu a senha? <a href="/forgot-password">Clique aqui!</a></p>
      <p>Não possui conta? <a href="/register">Cadastre-se</a></p>
    </div>
  );
};

export default Login;
