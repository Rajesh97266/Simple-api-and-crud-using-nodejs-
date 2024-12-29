import express from "express";

const app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello world"});
});

//CRUD functionality of movies 

//Reading
app.get("/movies", (req, res) => {
    res.json({
        message: "Hello world"});
});

//Creating
app.post("/movies", (req, res) => {
    res.json({
        message: "Hello world"});
});

//Updating
app.put("/movies/:id", (req, res) => {
    res.json({
        message: "Hello world"});
});

//Deleting  
app.delete("/movies/:id", (req, res) => {
    res.json({
        message: "Hello world"});
});

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});