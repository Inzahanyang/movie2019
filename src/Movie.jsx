import React from "react";
import PropTypes from "prop-types";

const Movie = ({ id, url, title, year, rating, summary, poster, genres }) => {
  return (
    <div>
      <a href={url}>
        <img src={poster} alt={title} />
      </a>
      <h1>{title}</h1>
      <h3>
        {year} / {rating}
      </h3>
      <ul>
        {genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
};

Movie.prototype = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
