const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const path = require('path');

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

//tells us where build & static folder are
 app.use(express.static(path.join(__dirname, '../build')));
 app.use('/static', express.static(path.join(__dirname, './build//static')))

//connecting to our mongoose db
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.msxev.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//defining schema
const Schema = mongoose.Schema;
//creating Schema
var tvShowSchema = new Schema({
    Title: String,
    Year: String,
    Poster: String
})

var TVShowModel = mongoose.model("movie", tvShowSchema)//variable used to interact with db

app.get('/api/TVShow/:id', (req,res)=>{
    console.log(req.params.id);

    TVShowModel.findById(req.params.id, (err, data )=> {
        res.json(data);
    })
})
//output is displayed on the server side( can be seen in the terminal )

//this is the url where we can see individual movies based on the id
//finds the id and returns the details
app.get('/api/TVShow', (req, res) => {

    TVShowModel.find((err, data) => {
        res.json(data);
    })

})

//put method, used to edit the movie
app.put('/api/TVShow/:id', (req,res)=>{
    console.log("Update TV Show: " + req.params.id);
    //pass up object containing new object. in other words update the document
    console.log(req.body);

    TVShowModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err, data)=>{
            res.send(data);//sending back the data
        })
})
//post method
//movie receives new movie that has been added to the server.
app.post('/api/TVShow', (req, res) => {
    console.log('TV Show Recieved');
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    TVShowModel.create({
        Title: req.body.Title,
        Year: req.body.Year,
        Poster: req.body.Poster
    })

    //sending back data to prevent duplicate data added to db
    res.send("Item Added!")
})

//delete method
//movie details are taken and when the appropriate id has been found is deleted from the server
app.delete('/api/TVShow/:id', (req,res)=>{
    console.log("Delete TV Show: " + req.params.id);

    TVShowModel.findByIdAndDelete(req.params.id,(err, data)=>{ //finds record in db by matching id, then deletes record and sends back some data
        res.send(data);
    })
})

//add at the bottom just over app.listen
// Handles any requests that don't match the ones above
app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname+'/../build/index.html'));

})

//listening at the port 4000 for the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})