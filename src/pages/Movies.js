import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Movies.css";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [slicemovies, setSlicemovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0"
      )
      .then((response) => {
        setMovies(response.data.results);
        setSlicemovies(response.data.results.slice(0, 10));
      });
  }, []);
  const handleClickMore = () => {
    setSlicemovies(movies.slice(0, 20));
  };
  return (
    <>
      <div
        className="container
      "
      >
        <div className="row container">
          {movies && movies.length > 0
            ? slicemovies.map((movie) => <Card key={movie.id} movie={movie} />)
            : ""}
        </div>
      </div>
      <div className="container buttonForMore">
        {" "}
        <button className="btn btn-primary " onClick={handleClickMore}>
          Click For More
        </button>
      </div>
    </>
  );
}

export default Movies;
