const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//connecting to our mongoose db
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.msxev.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//defining schema
const Schema = mongoose.Schema;
//creating Schema
var movieSchema = new Schema({
    Title: String,
    Year: String,
    Poster: String
})

var MovieModel = mongoose.model("movie", movieSchema)//variable used to interact with db

app.get('/api/movies/:id', (req,res)=>{
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (err, data )=> {
        res.json(data);
    })
})

app.get('/api/movies', (req, res) => {
    // const mymovies = [
    //     {
    //         "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "imdbID":"tt4154756",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "imdbID":"tt3498820",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         }
    // ];

    MovieModel.find((err, data) => {
        res.json(data);
    })

})

app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved');
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    MovieModel.create({
        Title: req.body.Title,
        Year: req.body.Year,
        Poster: req.body.Poster
    })

    //sending back data to prevent duplicate data added to db
    res.send("Item Added!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})