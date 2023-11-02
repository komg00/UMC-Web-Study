import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import TV from "./pages/TV";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
// import Movie from "./Components/Movie";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
