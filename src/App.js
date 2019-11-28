import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
// https://yts-proxy.now.sh/list_movies.json
export class App extends Component {
  state = {
    isLoding: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=download_count");
    this.setState({ movies, isLoding: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section>
        {isLoding ? (
          <div>
            <span>"Loading..."</span>
          </div>
        ) : (
          movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              url={movie.url}
              year={movie.year}
              rating={movie.rating}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))
        )}
      </section>
    );
  }
}

export default App;
