import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'inception_poster.jpg',
      rating: 9.3,
    },
    // Add more initial movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseInt(ratingFilter) // Convert to integer for comparison
  );

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
      <MovieList movies={filteredMovies} />
      {/* Example of adding a new movie */}
      <button
        onClick={() =>
          addMovie({
            title: "Gangs of lagos",
            description: "a movies that revolves around the lives of three friends that are surrounded by  crime in the isale eko area of lagos, Nigeria",
            posterURL: '"data:image/jpeg;base64,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",',
            rating: 9.2,
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
};


export default App;
