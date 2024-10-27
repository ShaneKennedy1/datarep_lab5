// Import the express module
const express = require('express');
// Create an express application
const app = express();
// Define the port number
const port = 3000;

// Error-handling 
app.use((err, req, res, next) => {
    console.error(err.stack); 
    // Send a 500 response
    res.status(500).send('Something went wrong!'); 
});

// Route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying'); // Send a welcome message
});

// Route with parameters for greeting by name and surname
app.get('/hello/:name/:sname', (req, res) => {
    // Concatenate name and surname
    const name = req.params.name + " " + req.params.sname; 
    // Send the greeting message
    res.send(`Hello ${name}`); 
});

// Route to get a list of movies in JSON format
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Send the movie list with a 201 status code
    res.status(201).json({ whatever: movies }); 
});

// Import the path module for handling file paths
const path = require('path');

// Route to serve an HTML file
app.get('/index', (req, res) => {
    // Send the index.html file from the root directory
    res.sendFile(__dirname + '/index.html'); 
});

// Route that greets by firstname and lastname using query parameters
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    // Send the greeting message
    res.send(`Hello ${firstname} ${lastname}`); 
});

// Import body-parser to parse request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission and greet by firstname and lastname
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`); 
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
