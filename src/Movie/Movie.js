import React from 'react'
import './Movie.scss'

const Movie = ({ movie }) => {
  const genres = movie.genres.map(genre => {
    return (
      <li key={genre}>{ genre }</li>
    )
  })

  const convertNumber = (num, type) => {
    return (
      num > 0 && <p><b>{ type }:</b> ${new Intl.NumberFormat('en-US').format(num)}</p>
    )
  }

  return (
    <section className='movie-section'>
      <article className="movie-info">
        <img src={movie.poster_path} alt="movie-poster" className="movie-poster"></img>
        <div className="movie-text">
          <h2>{ movie.title }</h2>
          { movie.tagline && <h3>{ movie.tagline }</h3> }
          <p>{ movie.overview }</p>
        </div>
        </article>
        <article className="more-info">
          <p><b>Average Rating:</b> { movie.average_rating.toFixed(1) }</p>
          <p><b>Release Date:</b> { new Date(movie.release_date).toDateString() }</p>
          <p><b>Runtime:</b> { movie.runtime } minutes</p>
          { convertNumber(movie.budget, 'Budget') }
          { convertNumber(movie.revenue, 'Revenue') }
      </article>
      <div className="genres">
        <ul>{genres}</ul>
      </div>
    </section>
  )
}

export default Movie
