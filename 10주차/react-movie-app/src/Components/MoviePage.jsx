import React, { useEffect, useState } from 'react'
import axios from 'axios';
const PosterUrl = 'https://image.tmdb.org/t/p/w500/';

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_KEY;
    const endpoint = 'movie/popular';
    axios.get(`https://api.themoviedb.org/3/${endpoint}`, {
      params: {
        api_key: API_KEY,
        page: currentPage,
      },
    })
      .then(response => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, [currentPage]);

  const onClickImg = (movie) => {
    console.log('Clicke on movie:', movie);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  return (
    <div className="container" >
      {movies.map((movie) => (
        <div key={movie.id} className='movie-container' onClick={() => onClickImg(movie)}>
          <img src={PosterUrl + movie.poster_path} alt={movie.title} />
          <div className='info'>
            <h4>{movie.title}</h4>
            <span>{movie.vote_average}</span>
          </div>
        </div>
      ))}
      <div className='pagination'>
        {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>
          이전
        </button>}
        <span>{currentPage}페이지</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          다음
        </button>
      </div>
    </div>
  );
};
