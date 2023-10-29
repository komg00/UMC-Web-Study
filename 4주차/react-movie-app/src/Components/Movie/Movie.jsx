import React from "react";

const PosterUrl = "https://image.tmdb.org/t/p/w1280/"

function Movie({title, poster_path, vote_average, overview_title, overview}) {
  return (
    <div className="contents">
      <img src={PosterUrl + poster_path} alt="영화 포스터" />
      <div className="info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      <div className="overview">
        <div className="overview-info">
          <p>{overview_title}</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
