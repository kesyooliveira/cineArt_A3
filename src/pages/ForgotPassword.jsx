
import React, { useState } from 'react';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Forgot Password:', { email });
    alert('If an account with that email exists, a password reset link will be sent.');
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
      <a href="/login">Voltar ao login.</a>
    </div>
  );
};

export default ForgotPassword;
