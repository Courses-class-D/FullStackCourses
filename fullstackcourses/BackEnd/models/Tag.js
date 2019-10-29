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


const tagsSchema = new Schema({
    label: String,
    tagLink: String,
  });
  
  let Tags = mongoose.model("tags", tagsSchema);

  let getTag = cb => {
    Tags.find({}, function(err, docs) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("DOCS:", docs);
      cb(docs);
    });
  };
  
  let insertTag = (cb, obj) => {
    console.log("OBJ", obj);
    if(
     obj.label!=""&&
     obj.tagLink!=""
    )
    {
    Tags.insertMany(
      [
        {
          label: obj.label,
          tagLink: obj.tagLink,
        }
      ],
      function(err, docs) {
        if (err) {
          console.log("ERR:", err);
        }
        console.log("DOCS:", docs);
        getTag(cb);
      }
    );}
  };
  
  module.exports = {
    getTag,
    insertTag
  };