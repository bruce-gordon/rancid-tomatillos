import React, { Component } from 'react'
import { getAllMovies, getMovieData, getVideoData} from '../apiCalls.js'
import './Movie.scss'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      video: []
    }
  }
  componentDidMount = () => {
    console.log(this.props.id)
    getMovieData(this.props.id)
    .then((data) => {
      this.setState({ movie: data.movie })
      this.findVideos()
    })
    .catch(error => this.setState({ error: error.message }))
  }


  render() {
    if (this.state.movie) {
      const genres = this.state.movie.genres.map(genre => {
        return (<li key={genre}>{ genre }</li>)
      })

      const convertNumber = (num, type) => {
        return (num > 0 && <p><b>{ type }:</b> ${new Intl.NumberFormat('en-US').format(num)}</p>)
      }
      return (
        <section className='movie-section'>
          <article className="movie-info">
            <img src={this.state.movie.poster_path} alt="movie-poster" className="movie-poster"></img>
            <div className="movie-text">
              <h2 className="movie-title">{ this.state.movie.title }</h2>
              { this.state.movie.tagline && <h3>{ this.state.movie.tagline }</h3> }
              <p>{ this.state.movie.overview }</p>
            </div>
            </article>
          <div className="details">
            <article className="more-info">
              <p><b>Average Rating:</b> { this.state.movie.average_rating.toFixed(1) }</p>
              <p><b>Release Date:</b> { new Date(this.state.movie.release_date).toDateString() }</p>
              <p><b>Runtime:</b> { this.state.movie.runtime } minutes</p>
              { convertNumber(this.state.movie.budget, 'Budget') }
              { convertNumber(this.state.movie.revenue, 'Revenue') }
              <p><b>Genres:</b><ul>{this.genres}</ul></p>
            </article>
            { this.state.video && <iframe data-testid="trailer" width="560" height="315" src={`https://www.youtube.com/embed/${this.state.video.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> }
          </div>
        </section>
      )
    } else {
      return <h3>Loading...</h3>
    }
  }
}

export default Movie
