import React from 'react';
import Thumbnail from './Thumbnail.js'
import '../css/ThumbnailContainer.scss'

const ThumbnailContainer = ({movies}) => {
  const allMovies = movies.map(movie => {
    return (
      <Thumbnail
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        key={movie.id}
      />
    )
  })

  return (
    <section className='thumbnail-container'>
      { allMovies }
    </section>
  )
}

export default ThumbnailContainer
