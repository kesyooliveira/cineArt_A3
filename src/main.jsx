import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';
import Genre from './pages/Genre.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import AuthLayout from './AuthLayout.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="genre/:id" element={<Genre />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
