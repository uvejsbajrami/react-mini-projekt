import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ movie }) {
  return (
    <>
      <div
        className="card mx-2 my-2"
        key={movie.id}
        style={{ width: 18 + "rem" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            <Link className="links" to={`/Movie/${movie.id}`}>
              {movie.original_title}
            </Link>
          </h5>
          <p className="card-text"></p>
          <Link className="btn btn-primary " to={`/Movie/${movie.id}`}>
            Watch Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
