import { movies } from "./movieDummy";
import Movie from "./Components/Movie/Movie";
import * as S from "./Components/Movie/Movie.style";

function App() {
  return (
    <S.Body>
      <S.Container>
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </S.Container>
    </S.Body>
  );
}

export default App;
