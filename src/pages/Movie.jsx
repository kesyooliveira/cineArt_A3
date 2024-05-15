import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"

import {
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard"

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const trailerRef = useRef(null)


  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const getTrailer = async (movieTitle) => {
    const youtubeSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle + " trailer")}&key=${youtubeApiKey}`

    const res = await fetch(youtubeSearchUrl)
    const data = await res.json()
    const trailerVideo = data.items.find(item => item.id.videoId)
    setTrailer(trailerVideo ? `https://www.youtube.com/embed/${trailerVideo.id.videoId}` : null)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [id])

  const handleWatchTrailer = () => {
    if (movie) {
      getTrailer(movie.title)
      trailerRef.current.focus()
    }
  }

  useEffect(() => {
    if (trailerRef.current) {
      trailerRef.current.focus()
    }
  }, [trailer])

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="container-info">
            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="player">
            <button className="go-watch" onClick={handleWatchTrailer}>Assistir</button>
          </div>
          {trailer && (
            <div className="trailer" tabIndex={0} ref={trailerRef}>
              <iframe
                width="900"
                height="480"
                src={trailer}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Movie
