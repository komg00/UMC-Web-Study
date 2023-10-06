import { movies } from "./movieDummy";
import Movie from "./Components/Movie";
import Overview from "./Components/Overview";

function App() {
  return (
    <div className="container">
      {movies.results.map((item) => (
        <div className="movie-container" key={item.id}>
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
          <Overview title={item.title} overview={item.overview} />
        </div>
      ))}
    </div>
  );
}

export default App;
