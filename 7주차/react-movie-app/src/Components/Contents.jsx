import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PosterUrl = "https://image.tmdb.org/t/p/w1280/";

function Contents({ title, poster_path, vote_average, tv_name, tv_poster_path, tv_vote_average }) {
  const navigate = useNavigate();

  const onClickImg = () => {
    if (title) {
      navigate(`/movie/${title}`, { state: { title, poster_path, vote_average}});
    } else if (tv_name) {
      navigate(`/tv/${tv_name}`, { state: { tv_name, tv_poster_path, tv_vote_average }});
    }    
  };

  return (
  <div className="movie-container" onClick={onClickImg}>
    {title && (
      <Link to={`/movie/${title}`}>
        <img src={PosterUrl + poster_path} alt={title} />
        <div className="info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
      </Link> 
    )}
    
    {tv_name && (
      <Link to={`/tv/${tv_name}`}>
      <img src={PosterUrl + tv_poster_path} alt={tv_name} />
      <div className="info">
        <h4>{tv_name}</h4>
        <span>{tv_vote_average}</span>
      </div>
    </Link>
    )}
  </div>
  );
}

export default Contents;
