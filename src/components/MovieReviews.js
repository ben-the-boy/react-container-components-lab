// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
  <div className='review-list'>
    {reviews.map((review) => (
      <div className='review'>
        <h3>{review.display_title} - Rated {review.mpaa_rating}</h3>
        
        <p>{review.summary_short}</p>
        <a href={review.link.url}>Read the NYT review</a>
      </div>
    ))}
  </div>
)

export default MovieReviews;
