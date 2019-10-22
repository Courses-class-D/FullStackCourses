const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/tutorials', {
  useNewUrlParser: true
});



const db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
  console.log('____________________________');
});
db.once('open', function() {
  console.log('mongoose connected successfully');
  console.log('____________________________');
});


let tutorialSchema = new mongoose.Schema( {
      

    Title:String,
    Link: String,
    Description:String,
    Tag:String,
    TypeOfTutorial:String,
    TyoeOfPay:String,
    SkillLevel:String,
  });

let Tutorials = mongoose.model('tutorials', tutorialSchema);


let getTutorials = cb => {
    Tutorials.find({}, function(err, docs) {
      if (err) {
        console.log('ERR:', err);
      }
      console.log('DOCS:', docs);
      cb(docs);
    });
  };


  let insertTutorial =(cb,obj)=>{
    console.log('OBJ',obj);
    Tutorials.insertMany(
      [
        {
            Title:  obj.tutorial.Title,
            Link:   obj.tutorial.Link,
            Description:  obj.tutorial.Description,
            Tag:  obj.tutorial.Tag,
            TypeOfTutorial:  obj.tutorial.TypeOfTutorial,
            TyoeOfPay:  obj.tutorial.TyoeOfPay,
            SkillLevel:  obj.tutorial.SkillLevel,
            

  }
  ],
    function(err,docs){
      if(err){
        console.log("ERR:",err)
      }
      console.log("DOCS:", docs);
      getTutorials(cb);
    }
    )
  }

  module.exports = {
    getTutorials,
    insertTutorial
  };

