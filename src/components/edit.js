import React, { Component } from 'react';
import axios from 'axios';

export class Edit extends React.Component {

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
            Poster: this.state.Poster,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/TVShow/' + this.state._id,newTVShow)
        .then(res => {
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error);
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
                        <input type="submit" value="Edit Show" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}

