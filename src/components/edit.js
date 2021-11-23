import React, { Component } from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.Title,
                    Year: response.data.Year,
                    Poster: response.data.Poster
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleSubmit(event) {
        alert('Movie Name: ' + this.state.Title +
            '\nMovie Year: ' + this.state.Year +
            '\nMovie Poster: ' + this.state.Poster);
        event.preventDefault()
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        })

        const newMovie = {
            Title: this.state.Title, //Title/title: this.state... has to be the smae as the server.js console.log
            Year: this.state.Year,
            Poster: this.state.Poster,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/movies/' + this.state._id,newMovie)
        .then(res => {
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error);
        });

        // axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>This is my create Component.</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea
                            type="text"
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Edit Movie" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}

