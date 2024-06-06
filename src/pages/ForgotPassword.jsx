import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <button type="submit">Enviar</button>
      </form>
      <Link to="/login">Voltar ao login.</Link>
    </div>
  );
};

export default ForgotPassword;
