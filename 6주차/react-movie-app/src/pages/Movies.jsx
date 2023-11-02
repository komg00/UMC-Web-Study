import React from "react";
import Movie from "../Components/Movie";
import { movies } from "../movieDummy";

export default function Movies() {
  return (
    <div className="container" >
      {movies.results.map((item) => (
        <Movie
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
        />
      ))}
    </div>
  );
};


