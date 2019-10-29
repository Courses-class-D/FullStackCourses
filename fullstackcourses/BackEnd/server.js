var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
const DB = require("./models/Tutorials");
const tagDB = require("./models/Tag");
const favDB = require("./models/Favorites")
var port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);



const mongoURI = "mongodb://localhost:27017/coursesRegister";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

var Users = require("./routes/Users");

app.use("/users", Users);

app.get("/data", (req, res) => {
  DB.getTutorials(tutorial => {
    res.json(tutorial);
  });
});

app.post(`/addtutorial`, (req, res) => {
  let obj = req.body;
  DB.insertTutorial(tutorial => {
    res.json(tutorial);
  }, obj);
});

app.delete(`/deleteTut/:id`, (req, res) => {
  let obj = req.params.id;
  console.log("obg :", obj);
  DB.remove(tutorial => {
    res.json(tutorial);
  }, obj);
});

// get filter
app.get(`/filter/:title`, (req, res) => {
  let obj = req.params.title;
  DB.filterDb(tutorial => {
    res.json(tutorial);
  }, obj);
});

app.get(`/tagsData`, (req, res) => {
  tagDB.getTag(tag => {
    res.json(tag);
  });
});

// Add Tag
app.post(`/addTag`, (req, res) => {
  console.log(req.body);
  let obj = req.body;
  tagDB.insertTag(tag => {
    res.json(tag);
  }, obj);
});

// get filter
app.get(`/filterId/:ID`, (req, res) => {
  let obj = req.params.ID;
  DB.filterId(tutorial => {
    res.json(tutorial);
  }, obj);
});

app.post(`/favorite/:id`, (req, res) => {
  let obj = req.params;
  favDB.insertFavorites(tutorial => {
    res.json(tutorial);
  }, obj);
});

app.get(`/getFav`, (req, res) => {
  favDB.getFavorites(favorites => {
    res.json(favorites);
  });
});

app.get("/getFavTut/:id", (req, res) => {
  let obj = req.params.id;
  DB.getFavTutorials(tutorial => {
    res.json(tutorial);
  }, obj);
});

// delete
app.delete("/deleteFav/:id", (req, res) => {
  let obj = req.params.id;
  favDB.remove(tutorial => {
    res.json(tutorial);
  }, obj);
});

app.listen(port, function() {
  console.log("Server is running on port: " + port);
});
