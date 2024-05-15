import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import GenresList from "../components/GenresList";
import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Genre = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMoviesByGenre = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setMovies(data.results);
        setLoading(false);
      } else {
        setError(data.status_message || "Erro ao buscar filmes.");
        setLoading(false);
      }
    } catch (err) {
      setError(err.message || "Erro ao buscar filmes.");
      setLoading(false);
    }
  };

  useEffect(() => {
    const genreUrl = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=${id}`;
    getMoviesByGenre(genreUrl);
  }, [id]);



  return (
    <div className="container">
      <h2 className="title">Resultados:</h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && movies.length === 0 && <p>Nenhum filme encontrado.</p>}
        {!loading && !error && movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Genre;
