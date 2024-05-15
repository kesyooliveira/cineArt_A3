import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GenresList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.themoviedb.org/3/genre/movie/list?${apiKey}&language=pt-BR`;

        const response = await axios.get(url);
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Erro ao buscar os gêneros:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <h2>Gêneros de Filmes</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>
            {genre.name} (ID: {genre.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;
