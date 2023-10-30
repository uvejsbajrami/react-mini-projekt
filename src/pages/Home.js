import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
function Home() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchSubmitClick = (e) => {
    e.preventDefault();
    const searchValue = document.getElementById("searchInput").value;
    setSearchValue(searchValue);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0"
      )
      .then((response) => setMovieSearch(response.data.results));
  }, []);

  const filteredMovie = movieSearch.find(
    (movie) => movie.original_title === searchValue
  );

  return (
    <>
      <div className="container">
        <br />
        <p className="p1"> Welcome to Movie DB</p>
        <br />
        <form onSubmit={searchSubmitClick}>
          <div className="row d-inline-block">
            <input
              style={{ border: 1 + "px solid black" }}
              type="search"
              className="form-control my-2"
              list="datalistOptions"
              id="searchInput"
              placeholder="Type to search..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="container divHomeMovie">
              {filteredMovie ? (
                <>
                  <div className="card mb-3" style={{ maxWidth: 600 + "px" }}>
                    <div className="row g-0">
                      <div className="col-md-4 imgdiv">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${filteredMovie.backdrop_path}`}
                          className="img-fluid rounded-start"
                          alt={filteredMovie.original_title}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            {filteredMovie.original_title}
                          </h5>
                          <p className="card-text descriptionText ">
                            {filteredMovie.overview}
                          </p>
                          <Link
                            className="btn btn-primary my-2 watchButton"
                            to={`/Movie/${filteredMovie.id}`}
                          >
                            Watch Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className='NoMovieSearch'>Dont have that movie</p>
              )}
            </div>
            <Link
              style={{ width: 140 + "px" }}
              className="btn btn-primary my-2"
              to="/Movies"
            >
              Explore Movies
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
