import React, {Component} from 'react';
import { TVShow } from './TVShow';
import axios from 'axios';

export class Read extends Component{

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({
                tvShows:response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    state = {
        tvShows: [ ]

    };

    ReloadData(){
        axios.get('http://localhost:4000/api/TVShow')  // gets json data for TVShow
        .then((response)=>{
            this.setState({
                tvShows:response.data//updates TVShow with array with retrived data
            })
        })
        .catch((error)=>{
            console.log(error);//logs error to console
        })
    }

    render(){
        return(
            <div>
                <h1>Top Shows.</h1>
                <TVShow tvShows={this.state.tvShows} ReloadData = {this.ReloadData}></TVShow>
            </div>
        );
    }
}

