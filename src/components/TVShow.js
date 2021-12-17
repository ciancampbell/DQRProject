import React, {Component} from 'react';
import { TVShowItem } from './TVShowItem';

export class TVShow extends React.Component{

    render(){
        return this.props.tvShows.map ( (tvShow) => {
            return <TVShowItem tvShow={tvShow} ReloadData = { this.props.ReloadData }></TVShowItem>//this.props calls method from parent passing to grandchild
        })
    }
    // function slits movies into four individual movies and passed a single movie to this new movie item
    //this .movies gets data about the 4 movies
    //use map function to seperate into individual movies
}

