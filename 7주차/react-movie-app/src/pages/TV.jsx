import React from "react";
import Contents from "../Components/Contents";
import { programs } from "../tvDummy"

export default function Movies() {
  return (
    <div className="container" >
      {programs.results.map((item) => (
        <Contents
          tv_name={item.name}
          tv_poster_path={item.poster_path}
          tv_vote_average={item.vote_average}
          key={item.id}
        />
      ))}
    </div>
  );
};


