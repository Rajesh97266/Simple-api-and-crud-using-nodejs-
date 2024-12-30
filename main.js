import express from "express";
import moviesRoute from "./routes/movies.route.js";

const app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hi This is main page",
  });
});

//CRUD functionality of movies
app.use("/movies", moviesRoute);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
