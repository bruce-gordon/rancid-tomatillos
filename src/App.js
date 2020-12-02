import React, { Component } from 'react';
import ThumbnailContainer from './components/ThumbnailContainer.js'
import Header from './components/Header.js';
import Movie from './components/Movie.js';
import movieData from './movieData.js';
import './css/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData,
      selectedMovie: null
    }
  }

  displayMovie = (id) => {
    return (
      this.setState({ selectedMovie: this.findMovieById(id) })
    )
  }

  findMovieById = (id) => {
    return (
      this.state.movies.find(movie => {
        return movie.id === id
      })
    )
  }

  render() {
    return (
      <main className='App'>
      <Header />
        { !this.state.selectedMovie ? 
        <ThumbnailContainer
          movies={this.state.movies}
          displayMovie={this.displayMovie}
        /> 
        : <Movie movie={this.state.selectedMovie}/> }
      </main>
    )
  }
}

export default App
