import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PosterUrl = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, poster_path, vote_average })  {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${title}`, { state: { title, poster_path, vote_average}});
  };

  return (
  <div className="movie-container" onClick={onClickImg}>
    <Link to={`/movie/${title}`}>
      <img src={PosterUrl + poster_path} alt={title} />
    <div className="info">
      <h4>{title}</h4>
      <span>{vote_average}</span>
    </div>
    </Link> 
  </div>
  );
}

export default Movie;
