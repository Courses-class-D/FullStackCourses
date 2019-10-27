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


// var SubmitedBy = require('./User');

const tutorialSchema = new Schema({
  Title: String,
  Link: String,
  Description: String,
  Tag: String,
  TypeOfTutorial: String,
  TyoeOfPay: String,
  SkillLevel: String,
  user_id:String
});




let Tutorials = mongoose.model("tutorials", tutorialSchema);

let getTutorials = cb => {
  Tutorials.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    cb(docs);
  });
};

let insertTutorial = (cb, obj) => {
  // console.log("OBJ", obj);
  
    
    if (
      obj.tutorial.Title !== "" &&
      obj.tutorial.Link !== "" &&
      obj.tutorial.Description !== "" &&
      obj.tutorial.Tag !== "" &&
      obj.tutorial.TypeOfTutorial !== "" &&
      obj.tutorial.TyoeOfPay !== "" &&
      obj.tutorial.SkillLevel !== ""&&
      obj.tutorial.user_id!==""
    ) {
      Tutorials.insertMany(
        [
          {
            Title: obj.tutorial.Title,
            Link: obj.tutorial.Link,
            Description: obj.tutorial.Description,
            Tag: obj.tutorial.Tag,
            TypeOfTutorial: obj.tutorial.TypeOfTutorial,
            TyoeOfPay: obj.tutorial.TyoeOfPay,
            SkillLevel: obj.tutorial.SkillLevel,
            user_id:obj.tutorial.user_id
          }
        ],
  
        function (err, docs) {
          if (err) {
            console.log("ERR:", err);
          }
          console.log("DOCS:", docs);
          getTutorials(cb);
        }
      );
    }
  
  }

let filterDb = (cb , title) => {
  Tutorials.find({ Tag : title}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    cb(docs);
  });
}

let filterId = (cb,ID) => {
  Tutorials.find({ user_id : ID}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    cb(docs);
  });
}


module.exports = {
  getTutorials,
  insertTutorial,
  filterDb,
  filterId
};
