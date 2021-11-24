import React, {Component} from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component{

    render(){
        return this.props.movies.map ( (movie) => {
            return <MovieItem movie={movie} ReloadData = { this.props.ReloadData }></MovieItem>//this.props calls method from parent passing to grandchild
        })
    }
    // function slits movies into four individual movies and passed a single movie to this new movie item
    //this .movies gets data about the 4 movies
    //use map function to seperate into individual movies
}

