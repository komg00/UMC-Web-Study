import React from "react";
import Contents from "../Components/Contents";
import { movies } from "../movieDummy";

export default function Movies() {
  return (
    <div className="container" >
      {movies.results.map((item) => (
        <Contents
          key={item.id}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
        />
      ))}
    </div>
  );
};


