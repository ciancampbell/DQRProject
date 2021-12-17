import React, { Component } from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTVShowName = this.onChangeTVShowName.bind(this);
        this.onChangeTVShowYear = this.onChangeTVShowYear.bind(this);
        this.onChangeTVShowPoster = this.onChangeTVShowPoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    handleSubmit(event) {
        alert('TV Show Name: ' + this.state.Title +
            '\nTV Show Year: ' + this.state.Year +
            '\nTV Show Poster: ' + this.state.Poster);
        event.preventDefault()
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        })

        const newTVShow = {
            Title: this.state.Title, //Title/title: this.state... has to be the smae as the server.js console.log
            Year: this.state.Year,
            Poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/movies', newTVShow)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    onChangeTVShowName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    onChangeTVShowYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    onChangeTVShowPoster(event) {
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
                        <label>Add TV Show Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTVShowName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add TV Show Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeTVShowYear}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add TV Show Poster: </label>
                        <textarea
                            type="text"
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangeTVShowPoster}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Add new Show" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}

