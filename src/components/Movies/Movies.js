import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';

const Movies = ({ genre }) => {
  //   const browse = JSON.parse(localStorage.getItem('category'));
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4cda4b65a6msh1664629c8a9b813p13d6c2jsnbd44fc8b9898',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, [genre]);
  return (
    <>
      <p className={styles.Genreheading}>{genre}</p>
      <div className={styles.MoviesContainer}>
        {movies.map((movie, index) => {
          return (
            <div key={index} className={styles.movieTitles}>
              <img
                src={movie.primaryImage?.url}
                className={styles.MovieImg}
                alt="MovieImg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
