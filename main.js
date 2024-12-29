import express from "express";

const app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello world"});
});

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});