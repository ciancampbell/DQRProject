import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios, { Axios  } from "axios";

export class TVShowItem extends React.Component { 

    constructor(){
        super();

        this.DeleteTVShow = this.DeleteTVShow.bind(this)//bind instance of this class to delete movie
    }


    DeleteTVShow(e){
        e.preventDefault(); // stops method being called every time page is loaded
        console.log("Delete: " + this.props.tvShow._id);

        axios.delete("http://localhost:4000/api/movies/" + this.props.tvShow._id)
        .then(()=>{
            this.props.ReloadData();//calling reloadMethod from parent class
        })
        .catch();
    }


    render() {
        return (
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
<p>{this.props.movie.Year}</p>
<img src={this.props.movie.Poster} width="200" height="200"></img>
*/}
                <Card>
                    <Card.Header>{this.props.tvShow.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.tvShow.Poster} width="200" height="200"></img>
                            <footer>
                                {this.props.tvShow.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to ={"/edit/" + this.props.tvShow._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteTVShow}>Delete</Button>
                </Card>



            </div>
        );
    }
}

