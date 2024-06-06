import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <>
      <div className="header-container">
        <Link to="/">
          <img src="/images/title.png" className="title-img" alt="title-img" />
        </Link>
      </div>

      <nav id='navbar'>
        <h2 className="surprise">
          <Link to="/login">Login / Cadastre-se</Link>
        </h2>
        <ul>
          <li><Link to="/genre/28">Ação</Link></li>
          <li><Link to="/genre/16">Animação</Link></li>
          <li><Link to="/genre/35">Comédia</Link></li>
          <li><Link to="/genre/878">Ficção Científica</Link></li>
          <li><Link to="/genre/10752">Guerra</Link></li>
          <li><Link to="/genre/10749">Romance</Link></li>
          <li><Link to="/genre/53">Suspense</Link></li>
          <li><Link to="/genre/27">Terror</Link></li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(ev) => setSearch(ev.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
