const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

const FavoriteSchema = new Schema({
  tutorial_id: String
});

let Favorites = mongoose.model("Favorite", FavoriteSchema);

let getFavorites = cb => {
  Favorites.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    cb(docs);
  });
};

let insertFavorites = (cb, obj) => {
  if (obj.id !== "") {
    Favorites.insertMany(
      [
        {
          tutorial_id: obj.id
        }
      ],
      (err, docs) => {
        if (err) {
          console.log("ERR:", err);
        }
        getFavorites(cb);
      }
    );
  }
};

let remove = (cb, ID) => {
    Favorites.remove({ tutorial_id: ID }, function(err, docs) {
      if (err) {
        console.log("ERR:", err);
      }
      cb(docs);
    });
  };

module.exports = {
  getFavorites,
  remove,
  insertFavorites
};
