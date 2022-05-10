import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import UpvoteTut from './components/UpvoteTut';
import Selection from './components/Selection';

class App extends Component {

  state = {
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=4b496ff14a7cd4c0fa50a6d99278b3a2&language=en-US`,
    genre: 'Comedy',
    genres: [],
    moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  }

  onGenreChange = (e) => {   
    this.setState({
      genre: e.target.value
    });

    const selectedGenre = this.state.genres.find(genre => 
      genre.name === this.state.genre
    );
    const genreId = selectedGenre.id

    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?` +
    `api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
    `language=en-US&sort_by=popularity.desc&` +
    `with_genres=${genreId}&` +
    `page=1&`;

    this.setState({
      moviesUrl:moviesUrl
    });

    console.log("ID: -> "+this.state.moviesUrl)
  }

  componentDidMount() {
    const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    fetch(genresURL)
      .then(response => response.json())
      .then(data => this.setState({genres: data.genres }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Navbar />
        <UpvoteTut/>
      </div>
    );
  }
}

export default App;
