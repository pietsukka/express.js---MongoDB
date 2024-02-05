// Import express
const express = require('express')

// Create an instance of express
const app = express();

// Define the port to run the server on
const PORT = 3000;

// Define a route for GET requests ti the root URL ('/')

app.get('/', (req, res) => {
    // Send a response when this route is accessed
    res.send('Hello World!');
});

// Starts the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});