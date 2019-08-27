import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    //Always remember to use return to actually return something 
   return movieData.map((movie) => //iterating through the movie data array and extracting each movie,
   // + KEy, key is like assigning a id to the object it allows react to keep track of the elements
   // calling the MovieCard and inserting the key and movie, using the spread operator allows to pass on all
   //the objects in that class
    <MovieCard {...movie} /> 
    // this passes the entire object with no assignment needed 
      // <MovieCard {movie} /> //
        // <MovieCard movieData = {movie} />
    );
    debugger;
   
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
