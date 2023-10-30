import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0"
      )
      .then((response) => setMovies(response.data.results));
    setMovie(movies.filter((movie) => movie.id == id)[0]);
  }, [movies]);
  return (
    <div
      className="container my-3
    "
    >
      {movie ? (
        <>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
          <h4>{movie.original_title}</h4>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          <p>Votes: {movie.vote_count}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Movie;
