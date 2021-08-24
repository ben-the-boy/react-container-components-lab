import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'CvP72HY6akEUm1ejHcrwFE02lTXAbLDa';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  render() {
    return (
        <div className='searchable-movie-reviews'>
          <form onSubmit={this.handleSubmit}>
            <h3>Search for films:</h3>
            <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
    )
  }
}
