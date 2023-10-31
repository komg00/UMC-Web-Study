import React from "react";
import * as S from "./Movie.style"

const PosterUrl = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average, overview}) {
  return (
    <S.MovieContainer>
      <S.MovieImage src={PosterUrl + poster_path} alt="영화 포스터" />
      <S.Info>
        <S.MovieTitle>{title}</S.MovieTitle>
        <S.VoteAverage>{vote_average}</S.VoteAverage>
      </S.Info>
      <S.Overview>
        <S.OverviewTitle>{title}</S.OverviewTitle>
        <S.OverviewInfo>{overview}</S.OverviewInfo>
      </S.Overview>
    </S.MovieContainer>
  );
}

export default Movie;
