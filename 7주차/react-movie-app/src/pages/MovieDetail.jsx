// MovieDetail.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";

const PosterUrl = "https://image.tmdb.org/t/p/w1280/";

const MovieDetail = () => {
  const { state } = useLocation();
  const { title } = useParams();
  const { tv_name } = useParams();

  const isMovie = state && state.title;
  const path = isMovie ? state.poster_path : state.tv_poster_path;
  console.log(state.tv_poster_path);
  
  return (
    <div className="movie-detail">
      <img src={PosterUrl + path} alt={title || tv_name} />
      <p>{isMovie ? title : tv_name}</p>
    </div>
  );
};

export default MovieDetail;
