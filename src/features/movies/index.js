const express = require("express");

const app = express();
const port = 3000;

let movies = [
  { id: 1, title: "Inception", director: "Chris", release_date: "2010-07-16" },
  { id: 2, title: "The Irishman", director: "Martin", release_date: "2010-09-16" },
];

// Get all movies
app.get("/movie", (req, res) => {
  res.json(movies);
});

// Create new movie list
app.post("/movie", (req, res) => {
  const movie = req.body;

  console.log(movie);
  res.send("Movie is added to the list");
});

// Get movie by id
app.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id === id) {
      res.json(movie);
      return;
    }
  }
});

// remove movie from the list
app.delete("/movie/:id", (req, res) => {
  const id = req.params.id;

  movies = movies.filter((movie) => {
    movie.id !== id ? true : false;
  });

  res.send("Movie is deleted");
});

app.listen(port, () => console.log(`Server listen at port ${port}`));
