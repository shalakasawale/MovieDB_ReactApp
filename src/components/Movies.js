import React, { Component } from 'react';

class Movies extends Component {

    state = {
        movies: []
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.url !== nextProps.url) {
          this.fetchMovies(nextProps.url);
        }
      }

    componentDidMount = () => {
        this.fetchMovies(this.props.url);
    };

    fetchMovies = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => this.storeMovies(data))
        .catch(error => console.log(error));
    }

    storeMovies = (data) => {
        const movies = data.results.map(result => {
            const  { vote_count, id, genre_ids, poster_path, title, vote_average, release_date, adult, overview } = result;
            return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date, adult, overview };
        })
        this.setState({
            movies: movies
        });
    }
    
    render() {
        return (
            <div className="container">
                <h5>Movies ({this.props.genre})</h5>
                <div className="row">
                {
                    this.state.movies.map((movie) => {
                        const imageUrl = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
                        const year = `${movie.release_date}`.substring(0,4)
                        return (
                            <div className="col s3" key={movie.id}>
                                <div className="card medium">
                                    <div className="card-image">
                                        <img src={imageUrl} alt={imageUrl}/>
                                    </div>
                                    <div className="card-content center">
                                        <h6>{movie.title}</h6>
                                        <div className="row">
                                            <div className="col s6">
                                                <div className="section">
                                                    <p>Year</p>
                                                    <p>{year}</p>
                                                </div>
                                            </div>
                                            <div className="col s6">
                                                <div className="section">
                                                    <p>Rating</p>
                                                    <p>{movie.vote_average}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Movies;
