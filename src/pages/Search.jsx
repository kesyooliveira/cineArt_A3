import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("q");

  const getSearchedMovies = async () => {
    setLoading(true);
    const url = `${searchURL}?${apiKey}&query=${query}&page=${page}`;
    const res = await axios.get(url);
    setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
    setLoading(false);
  };

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (query) {
      getSearchedMovies();
    }
  }, [query, page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para <span className="query-text">"{query}"</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p className="loading">Carregando... Aguarde...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
