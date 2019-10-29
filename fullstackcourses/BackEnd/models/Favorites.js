const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://hadeel:5682165@coursescluster-wekvq.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
.then( () => {
  console.log('Connection to the Atlas Cluster is successful!')
})
.catch( (err) => console.error(err));

const db = mongoose.connection;


db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});


// mongoose.connect('mongodb+srv://hadeel:5682165@coursescluster-wekvq.mongodb.net/test?retryWrites=true&w=majority')


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
