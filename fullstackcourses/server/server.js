const express = require('express');
const cors = require('cors');

const DB = require('./db');


const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json())





app.get('/', (req, res) => {
      res.json("done");
});



app.get('/data', (req, res) => {
    DB.getTutorials(readTutorial => {
        console.log('CALL BACK FROM SERVER');
        res.json(readTutorial);
});
  });






  app.post(`/addtutorial`,(req,res)=>{
    // console.log(req.body);
    let obj = req.body ;
    DB.insertTutorial(tutorial => {
    // console.log('CALL BACK FROM SERVER');
    res.json(tutorial);
    }, obj);     
  })











const PORT = 9000;
app.listen(PORT, function() {console.log('Server is running on port: ' + PORT)})
// let tutorials = [
//     {
//         id :1,
//         Title:"Androis Tutorial",
//         Link: "https://www.tutorialspoint.com/android/index.htm",
//         Description:"Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers",
//         Tag:"Android",
//         TypeOfTutorial:"Video",
//         TyoeOfPay:"Free",
//         SkillLevel:"Beginner"
//     },
//     {
//       id : 2,
//       Title:"PHP Tutorial",
//       Link: "https://www.w3schools.com/php/",
//       Description:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",
//       Tag:"PHP",
//       TypeOfTutorial:"Video",
//       TyoeOfPay:"Free",
//       SkillLevel:"Intermediate"
//     },
//     {
      
//       id : 3,
//       Title:"Laravel Tutorial",
//       Link: "https://laravel-news.com/your-first-laravel-application",
//       Description:"Laravel focuses on the end user first, which means its focus is on simplicity, clarity, and getting work done",
//       Tag:"Laravel",
//       TypeOfTutorial:"Video",
//       TyoeOfPay:"Free",
//       SkillLevel:"Advanced"
//     }
  
// ]