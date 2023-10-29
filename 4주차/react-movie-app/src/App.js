import { movies } from "./movieDummy";
import {
  MovieContainer,
  MovieImage,
  Info,
  MovieTitle,
  VoteAverage,
  Overview,
  PosterUrl,
  OverviewInfo,
} from "./Components/Movie/Movie.style.jsx";

function App() {
  return (
    <div className="container">
      {movies.results.map((item) => (
        <MovieContainer key={item.id}>
          <MovieImage src={PosterUrl + item.poster_path} alt="영화 포스터" />
          <Info>
            <MovieTitle>{item.title}</MovieTitle>
            <VoteAverage>{item.vote_average}</VoteAverage>
          </Info>
          <Overview>
            <OverviewInfo>
              <p>{item.title}</p>
              <p>{item.overview}</p>
            </OverviewInfo>
          </Overview>
        </MovieContainer>
      ))}
    </div>
  );
}

export default App;
