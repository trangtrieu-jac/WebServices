// Import packages and set the port
import bodyParser from "body-parser";
import express from "express";
const port = 3002;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Send message
app.get("/", (request, response) => {
  response.send({
    message: "Node.js and Express REST API",
  });
});

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});


// // Import packages and set the port
// import express from "express";
// const port = 3002;
// const app = express();

// app.get("/", (request, response) => {
//   console.log(`URL: ${request.url}`);
//   response.send("Hello, Server!");
// });

// app.get("/hello", (request, response) => {
//   console.log(`URL: ${request.url}`);
//   response.send("Hello from /hello, Server!");
// });

// // tell to listen to request
// const server = app.listen(port, (error) => {
//   if (error) return console.log(`Error: ${error}`);
// console.log(`Server listening on port ${server.address().port}`);
// });


// middleware: between the moment when your request is receive and the handler that you created is call (app.get...)

// we want to parse it(json) bc we want data structure